# InterfaceUnitChargesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code | [optional] 
**Logo** | Pointer to **string** | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. | [optional] 
**UnitCharges** | Pointer to [**[]InterfaceUnitChargeType**](InterfaceUnitChargeType.md) |  | [optional] 

## Methods

### NewInterfaceUnitChargesType

`func NewInterfaceUnitChargesType() *InterfaceUnitChargesType`

NewInterfaceUnitChargesType instantiates a new InterfaceUnitChargesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceUnitChargesTypeWithDefaults

`func NewInterfaceUnitChargesTypeWithDefaults() *InterfaceUnitChargesType`

NewInterfaceUnitChargesTypeWithDefaults instantiates a new InterfaceUnitChargesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *InterfaceUnitChargesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *InterfaceUnitChargesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *InterfaceUnitChargesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *InterfaceUnitChargesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLogo

`func (o *InterfaceUnitChargesType) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *InterfaceUnitChargesType) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *InterfaceUnitChargesType) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *InterfaceUnitChargesType) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetUnitCharges

`func (o *InterfaceUnitChargesType) GetUnitCharges() []InterfaceUnitChargeType`

GetUnitCharges returns the UnitCharges field if non-nil, zero value otherwise.

### GetUnitChargesOk

`func (o *InterfaceUnitChargesType) GetUnitChargesOk() (*[]InterfaceUnitChargeType, bool)`

GetUnitChargesOk returns a tuple with the UnitCharges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitCharges

`func (o *InterfaceUnitChargesType) SetUnitCharges(v []InterfaceUnitChargeType)`

SetUnitCharges sets UnitCharges field to given value.

### HasUnitCharges

`func (o *InterfaceUnitChargesType) HasUnitCharges() bool`

HasUnitCharges returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


