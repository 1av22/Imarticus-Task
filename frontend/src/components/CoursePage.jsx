import { useEffect, useState } from 'react';
import axios from 'axios';
import { Accordion, ListGroup, Navbar, Nav, Container, Button, Modal, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function CoursePage() {
    const [course, setCourse] = useState(null);
    const [files, setFiles] = useState([]);
    const [fileSummary, setFileSummary] = useState(null);
    const [showSummaryModal, setShowSummaryModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [newFile, setNewFile] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        // Check if token exists, if not redirect to login
        if (!token) {
            navigate('/login');
            return;
        }

        // Decode token to check if user is admin
        const decoded = JSON.parse(atob(token.split('.')[1]));
        setIsAdmin(decoded.isAdmin);

        const fetchCourseData = async () => {
            try {
                const response = await axios.get('http//imarticus-task.onrender.com/api/courses', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setCourse(response.data[0]); // Assuming only one course
            } catch (err) {
                console.error('Error fetching course data:', err.response ? err.response.data : err);
            }
        };

        const fetchFilesData = async () => {
            try {
                const response = await axios.get('https://imarticus-task.onrender.com/api/files/all', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setFiles(response.data);
            } catch (err) {
                console.error('Error fetching files data:', err.response ? err.response.data : err);
            }
        };

        fetchCourseData();
        fetchFilesData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleShowSummary = async (fileId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get(`https://imarticus-task.onrender.com/api/files/summary/${fileId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setFileSummary(response.data.summaryText);
            setSelectedFile(fileId);
            setShowSummaryModal(true);
        } catch (err) {
            console.error('Error fetching file summary:', err.response ? err.response.data : err);
        }
    };

    const handleCloseSummary = () => {
        setShowSummaryModal(false);
        setFileSummary(null);
        setSelectedFile(null);
    };

    const handleFileChange = (e) => {
        setNewFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        const token = localStorage.getItem('token');
        if (!newFile) {
            console.log('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', newFile);

        try {
            const response = await axios.post('https://imarticus-task.onrender.com/api/upload/', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('File uploaded successfully:', response.data);
            await new Promise(resolve => setTimeout(resolve, 2000));
            setFiles([...files, response.data]); // Add the uploaded file to the list
        } catch (err) {
            console.error('Error uploading file:', err.response ? err.response.data : err);
        }
    };

    // Check if course or files are not loaded, show a loading state
    if (!course || !files) return <div>Loading...</div>;

    return (
        <>
            {/* Navbar */}
            <Navbar bg="success" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">LMS</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* Course Page Content */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100vw', margin: '0', padding: '0', backgroundColor: '#e9f7ef' }}>
                <div style={{ width: '100%', maxWidth: '900px', padding: '2rem', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h2 className="text-center mb-4" style={{ color: '#28a745' }}>
                        {course.title}
                    </h2>
                    <p className="text-center mb-4">{course.description}</p>

                    <Accordion defaultActiveKey="0">
                        {course.modules && course.modules.map((module, index) => (
                            <Accordion.Item eventKey={String(index)} key={module._id}>
                                <Accordion.Header>
                                    <h4>{module.title}</h4>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        {module.videos && module.videos.map((video) => (
                                            <ListGroup.Item key={video._id}>
                                                <strong>{video.title}</strong> - {video.duration}
                                                <br />
                                                <a href={video.url} target="_blank" rel="noopener noreferrer">
                                                    Watch
                                                </a>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>

                    {/* Files Section */}
                    <div className="mt-5">
                        <h3>Uploaded Files</h3>
                        <ListGroup>
                            {files && files.map((file) => (
                                <ListGroup.Item key={file._id}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <strong>{file.name}</strong> - {file.size} bytes
                                        </div>
                                        <Button variant="info" onClick={() => handleShowSummary(file._id)}>
                                            Summarize
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>

                    {/* Admin File Upload Section */}
                    {isAdmin && (
                        <div className="mt-5">
                            <h3>Upload New File</h3>
                            <Form>
                                <Form.Group controlId="fileUpload">
                                    <Form.Label>Select a file to upload:</Form.Label>
                                    <Form.Control type="file" onChange={handleFileChange} />
                                </Form.Group>
                                <Button variant="success" onClick={handleFileUpload} className="mt-3">
                                    Upload
                                </Button>
                            </Form>
                        </div>
                    )}
                </div>
            </div>

            {/* Summary Modal */}
            <Modal show={showSummaryModal} onHide={handleCloseSummary}>
                <Modal.Header closeButton>
                    <Modal.Title>File Summary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{fileSummary}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSummary}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CoursePage;
