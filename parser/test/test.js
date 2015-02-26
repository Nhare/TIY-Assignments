'use strict';


  var mail =
    'Delivered-To: oharemarketing@gmail.com\n'+
    'Received: by 10.36.63.196 with SMTP id d187csp2910003ita;
            Wed, 25 Feb 2015 11:42:11 -0800 (PST)\n'+
    'X-Received: by 10.180.86.35 with SMTP id m3mr9524395wiz.83.1424893330820;
            Wed, 25 Feb 2015 11:42:10 -0800 (PST)\n'+
    'Return-Path: <michael.miller@cloudspace.com>\n'+
    'Received: from mail-wi0-f174.google.com (mail-wi0-f174.google.com. [209.85.212.174])
            by mx.google.com with ESMTPS id vu7si74979248wjc.107.2015.02.25.11.42.10
            for <oharemarketing@gmail.com>
            (version=TLSv1.2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);
            Wed, 25 Feb 2015 11:42:10 -0800 (PST)\n'+
    'Received-SPF: softfail (google.com: domain of transitioning michael.miller@cloudspace.com does not designate 209.85.212.174 as permitted sender) client-ip=209.85.212.174;\n'+
    'Authentication-Results: mx.google.com;
           spf=softfail (google.com: domain of transitioning michael.miller@cloudspace.com does not designate 209.85.212.174 as permitted sender) smtp.mail=michael.miller@cloudspace.com\n'+
    'Received: by mail-wi0-f174.google.com with SMTP id em10so36008340wid.1
            for <oharemarketing@gmail.com>; Wed, 25 Feb 2015 11:42:10 -0800 (PST)\n'+
    'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
            d=1e100.net; s=20130820;
            h=x-gm-message-state:mime-version:date:message-id:subject:from:to
             :content-type;
            bh=l0IvTp2ZuuV2iM1L4Y/8e1lz/8MXt7nc0CyG6bHo/mQ=;
            b=j7H6gYJLUhGLwEjpl1BZ0HM0Lh+KNpR+1x+euzFcE8S+WEDKoYleJZd4bS6mI67Yz1
             ZoTcR6IYfSiPt2/FHNN+iHbgO/xOvnh5HJtSVH6FOTbyEh3THiwE7wqX1tSGv2K5Kdjd
             rDzQloQheX3GjSmWVAD6sCxssrh5/Tt3ue0vO37nHLYkqi4beTXvsZcusrjFvbgF8B+k
             RLXMyWiaf7OyZnTClSR6a4lk849gxocZaePsrgIVtz4EMyPwZvqKBkxZnBZ7xR/wsUuI
             znFK1BTJK1bH1qLJyEHBJCXC15caF3KKglH97316Mlsaefnj35HqIip9jmtWX4T4RFlB
             zJDw==\n'+
    'X-Gm-Message-State: ALoCoQnzva3stZbI7gUR8jsRAtDJNwQTIZbGpdAgdUWLTUv1JiZz6+akwp7guBSk4W+zrD55tOJe\n'+
    'MIME-Version: 1.0\n'+
    'X-Received: by 10.194.191.228 with SMTP id hb4mr9721841wjc.116.1424893330006;
     Wed, 25 Feb 2015 11:42:10 -0800 (PST)\n'+
    'Received: by 10.27.110.5 with HTTP; Wed, 25 Feb 2015 11:42:09 -0800 (PST)\n'+
    'Date: Wed, 25 Feb 2015 14:42:09 -0500\n'+
    'Message-ID: <CAOHto8Us-gn=dS=F=qrpbp9vfTr=-7n3XLLgUpLF+V4rdkHP1g@mail.gmail.com>\n'+
    'Subject: Coding Practicle\n'+
    'From: Michael Miller <michael.miller@cloudspace.com>\n'+
    'To: Nicholas Hare <oharemarketing@gmail.com>\n'+
    'Content-Type: multipart/alternative; boundary=047d7b8750bec7c49e050feed435';
