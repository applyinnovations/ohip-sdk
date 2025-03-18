# PackagesReservationPackages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationPackage** | Pointer to [**[]ReservationPackageType**](ReservationPackageType.md) | A Service object represents a package provided to guests. Service packages may have associated inventory and charges. | [optional] 
**InventoryItems** | Pointer to [**ResInventoryItemsType**](ResInventoryItemsType.md) |  | [optional] 

## Methods

### NewPackagesReservationPackages

`func NewPackagesReservationPackages() *PackagesReservationPackages`

NewPackagesReservationPackages instantiates a new PackagesReservationPackages object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackagesReservationPackagesWithDefaults

`func NewPackagesReservationPackagesWithDefaults() *PackagesReservationPackages`

NewPackagesReservationPackagesWithDefaults instantiates a new PackagesReservationPackages object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationPackage

`func (o *PackagesReservationPackages) GetReservationPackage() []ReservationPackageType`

GetReservationPackage returns the ReservationPackage field if non-nil, zero value otherwise.

### GetReservationPackageOk

`func (o *PackagesReservationPackages) GetReservationPackageOk() (*[]ReservationPackageType, bool)`

GetReservationPackageOk returns a tuple with the ReservationPackage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPackage

`func (o *PackagesReservationPackages) SetReservationPackage(v []ReservationPackageType)`

SetReservationPackage sets ReservationPackage field to given value.

### HasReservationPackage

`func (o *PackagesReservationPackages) HasReservationPackage() bool`

HasReservationPackage returns a boolean if a field has been set.

### GetInventoryItems

`func (o *PackagesReservationPackages) GetInventoryItems() ResInventoryItemsType`

GetInventoryItems returns the InventoryItems field if non-nil, zero value otherwise.

### GetInventoryItemsOk

`func (o *PackagesReservationPackages) GetInventoryItemsOk() (*ResInventoryItemsType, bool)`

GetInventoryItemsOk returns a tuple with the InventoryItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItems

`func (o *PackagesReservationPackages) SetInventoryItems(v ResInventoryItemsType)`

SetInventoryItems sets InventoryItems field to given value.

### HasInventoryItems

`func (o *PackagesReservationPackages) HasInventoryItems() bool`

HasInventoryItems returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


