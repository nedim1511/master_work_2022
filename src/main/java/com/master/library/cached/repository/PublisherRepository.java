package com.master.library.cached.repository;

import com.master.library.cached.domain.Publisher;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Publisher entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PublisherRepository extends JpaRepository<Publisher, Long>, JpaSpecificationExecutor<Publisher> {}
