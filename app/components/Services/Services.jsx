"use client";
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaPaintBrush, FaFileAlt, FaLaptopCode, FaBullhorn, FaSearch, FaCopy, FaVideo, FaPenFancy, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Services.module.css';

export default function  Services() {
  const services = [
    { title: 'Graphic Design', icon: <FaPaintBrush />, description: 'We live in a visual world. With our graphic design services, we can help you communicate your brand’s message in a visually appealing way. We can design anything from social media graphics to brochures, business cards, and more. With our designs, your brand will stand out from the crowd.' },
    { title: 'Poster Design', icon: <FaFileAlt />, description: 'Whether you need a poster for a special event, or to promote a new product or service, we’ve got you covered. Our team can create attention-grabbing posters that will get your message across.' },
    { title: 'Graphic Design', icon: <FaPaintBrush />, description: 'We live in a visual world. With our graphic design services, we can help you communicate your brand’s message in a visually appealing way. We can design anything from social media graphics to brochures, business cards, and more. With our designs, your brand will stand out from the crowd.' },
    { title: 'Poster Design', icon: <FaFileAlt />, description: 'Whether you need a poster for a special event, or to promote a new product or service, we’ve got you covered. Our team can create attention-grabbing posters that will get your message across.' },
    { title: 'Web Design', icon: <FaLaptopCode />, description: 'In the digital age, a website is a must-have for any business. Our team will design a website that is not only visually appealing, but also user-friendly and optimized for search engines.' },
    { title: 'Digital Marketing', icon: <FaBullhorn />, description: 'In today’s digital world, online marketing is essential. We can help you develop and implement a digital marketing strategy that drives traffic to your website, increases brand awareness, and generates leads.' },
    { title: 'SEO Services', icon: <FaSearch />, description: 'Search engine optimization (SEO) is the process of improving your website’s visibility in search engine results. Our team can help you optimize your website for search engines, so you can attract more organic traffic and reach a larger audience.' },
    { title: 'Copywriting Services', icon: <FaCopy />, description: 'Good copy can make or break your marketing efforts. Our team of skilled copywriters can craft compelling copy that engages your audience, drives action, and sells your products or services.' },
    { title: 'Video Editing Services', icon: <FaVideo />, description: 'With video content becoming increasingly popular, our video editing services can help you create engaging videos that captivate your audience.' },
    { title: 'Blog Writing Services', icon: <FaPenFancy />, description: 'A blog can be a powerful tool for driving traffic to your website and establishing your brand as a thought leader in your industry. Our team can create engaging and informative blog posts that your audience will love.' },
    { title: 'Brand Identity Design', icon: <FaChartLine />, description: 'Your brand is more than just a logo. It’s the overall image and identity of your business. Our team can help you develop a strong brand identity that aligns with your business goals and resonates with your target audience.' },
  ];

  return (
    <section id="services" className={styles.services}>
      <Container>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >Here’s a glimpse of what we can do for you:</motion.p>
        <div className={styles.serviceCards}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image src={service.icon} alt={service.title} width={64} height={64} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
      {/* <motion.div
          className={styles.teamSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className={styles.subSectionTitle}>Our Team</h3>
          <p className={styles.teamDescription}>
            Our team is composed of 12 dedicated professionals, each specializing in their field. We have graphic designers, web designers, copywriters, website strategy experts, social media managers, virtual assistants, video editors, and creative professionals.
          </p>
          <Row>
            <Col md={4}>
              <Card className={styles.infoCard}>
                <Card.Body>
                  <Card.Title>Location</Card.Title>
                  <Card.Text>
                    Based in Westlands, Nairobi, our office is situated along
                    Karuna Road, Western Heights, 8th Floor at Skyrise business
                    centre. It's the perfect location for us to meet with
                    clients and discuss projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={styles.infoCard}>
                <Card.Body>
                  <Card.Title>Experience</Card.Title>
                  <Card.Text>
                    In the past 5 years, we have successfully completed over 45
                    websites and have ventured into skills training and personal
                    development.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={styles.infoCard}>
                <Card.Body>
                  <Card.Title>Training</Card.Title>
                  <Card.Text>
                    We have had over 10,000 students take classes through Tera
                    Creations on graphic design, web design, computer literacy,
                    digital literacy, digital marketing, among others.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div> */}
    </section>
  );
};