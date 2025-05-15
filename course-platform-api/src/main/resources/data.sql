-- Inserção de cursos
INSERT INTO courses (id, slug, title, description) VALUES 
(1, 'java-fundamentals', 'Fundamentos de Java', 'Aprenda os conceitos básicos da linguagem Java, desde variáveis até orientação a objetos.');

-- INSERT INTO courses (id, slug, title, description) VALUES 
-- (2, 'angular-essentials', 'Angular Essencial', 'Domine o framework Angular com TypeScript e crie aplicações web modernas e reativas.');

-- Inserção de vídeos para o curso de Java
INSERT INTO videos (id, slug, gumlet_asset_id, title, video_order, course_id) VALUES 
(1, 'criando-qrcode', '68095516c1d254855e406f87', 'Criando QRCode com Java', 1, 1);

INSERT INTO videos (id, slug, gumlet_asset_id, title, video_order, course_id) VALUES 
(2, 'roadmap-java', '680a9f1d88e513e4312e51cc', 'Roadmap Java', 2, 1);

INSERT INTO videos (id, slug, gumlet_asset_id, title, video_order, course_id) VALUES 
(3, 'testes-unitarios-poku', '680a9f3c0527a5bd8dd9904c', 'Testes Unitários com POKU', 3, 1);

-- Inserção de vídeos para o curso de Angular
-- INSERT INTO videos (id, slug, gumlet_asset_id, title, video_order, course_id) VALUES 
-- (4, 'introducao-angular', '64a651e54dc6e9c15e000004', 'Introdução ao Angular', 1, 2);

-- INSERT INTO videos (id, slug, gumlet_asset_id, title, video_order, course_id) VALUES 
-- (5, 'components', '64a651e54dc6e9c15e000005', 'Componentes e Templates', 2, 2);

-- INSERT INTO videos (id, slug, gumlet_asset_id, title, video_order, course_id) VALUES 
-- (6, 'services-di', '64a651e54dc6e9c15e000006', 'Serviços e Injeção de Dependência', 3, 2); 