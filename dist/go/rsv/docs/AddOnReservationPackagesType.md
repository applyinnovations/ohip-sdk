# AddOnReservationPackagesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property code of the reservation. | [optional] 
**ReservationPackages** | Pointer to [**[]ReservationPackageType**](ReservationPackageType.md) | A Service object represents a package provided to guests. Service packages may have associated inventory and charges. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAddOnReservationPackagesType

`func NewAddOnReservationPackagesType() *AddOnReservationPackagesType`

NewAddOnReservationPackagesType instantiates a new AddOnReservationPackagesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddOnReservationPackagesTypeWithDefaults

`func NewAddOnReservationPackagesTypeWithDefaults() *AddOnReservationPackagesType`

NewAddOnReservationPackagesTypeWithDefaults instantiates a new AddOnReservationPackagesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *AddOnReservationPackagesType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *AddOnReservationPackagesType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *AddOnReservationPackagesType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *AddOnReservationPackagesType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetHotelId

`func (o *AddOnReservationPackagesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AddOnReservationPackagesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AddOnReservationPackagesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AddOnReservationPackagesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationPackages

`func (o *AddOnReservationPackagesType) GetReservationPackages() []ReservationPackageType`

GetReservationPackages returns the ReservationPackages field if non-nil, zero value otherwise.

### GetReservationPackagesOk

`func (o *AddOnReservationPackagesType) GetReservationPackagesOk() (*[]ReservationPackageType, bool)`

GetReservationPackagesOk returns a tuple with the ReservationPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPackages

`func (o *AddOnReservationPackagesType) SetReservationPackages(v []ReservationPackageType)`

SetReservationPackages sets ReservationPackages field to given value.

### HasReservationPackages

`func (o *AddOnReservationPackagesType) HasReservationPackages() bool`

HasReservationPackages returns a boolean if a field has been set.

### GetLinks

`func (o *AddOnReservationPackagesType) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AddOnReservationPackagesType) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AddOnReservationPackagesType) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AddOnReservationPackagesType) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AddOnReservationPackagesType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AddOnReservationPackagesType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AddOnReservationPackagesType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AddOnReservationPackagesType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


