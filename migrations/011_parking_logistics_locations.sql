ALTER TABLE parking_stores
  ADD COLUMN navigation_url VARCHAR(2000) NOT NULL DEFAULT '';

ALTER TABLE parking_lot_distances
  MODIFY COLUMN minutes DOUBLE NULL,
  ADD COLUMN km_auto TINYINT(1) NOT NULL DEFAULT 0;

ALTER TABLE parking_store_lot_distances
  MODIFY COLUMN minutes DOUBLE NULL,
  ADD COLUMN km_auto TINYINT(1) NOT NULL DEFAULT 0;
