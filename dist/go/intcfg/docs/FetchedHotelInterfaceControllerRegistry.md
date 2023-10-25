# FetchedHotelInterfaceControllerRegistry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Reg** | Pointer to [**[]HotelInterfaceControllerRegType**](HotelInterfaceControllerRegType.md) | Collection of Hotel Interface Controller Registry. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchedHotelInterfaceControllerRegistry

`func NewFetchedHotelInterfaceControllerRegistry() *FetchedHotelInterfaceControllerRegistry`

NewFetchedHotelInterfaceControllerRegistry instantiates a new FetchedHotelInterfaceControllerRegistry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchedHotelInterfaceControllerRegistryWithDefaults

`func NewFetchedHotelInterfaceControllerRegistryWithDefaults() *FetchedHotelInterfaceControllerRegistry`

NewFetchedHotelInterfaceControllerRegistryWithDefaults instantiates a new FetchedHotelInterfaceControllerRegistry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *FetchedHotelInterfaceControllerRegistry) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchedHotelInterfaceControllerRegistry) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchedHotelInterfaceControllerRegistry) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchedHotelInterfaceControllerRegistry) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReg

`func (o *FetchedHotelInterfaceControllerRegistry) GetReg() []HotelInterfaceControllerRegType`

GetReg returns the Reg field if non-nil, zero value otherwise.

### GetRegOk

`func (o *FetchedHotelInterfaceControllerRegistry) GetRegOk() (*[]HotelInterfaceControllerRegType, bool)`

GetRegOk returns a tuple with the Reg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReg

`func (o *FetchedHotelInterfaceControllerRegistry) SetReg(v []HotelInterfaceControllerRegType)`

SetReg sets Reg field to given value.

### HasReg

`func (o *FetchedHotelInterfaceControllerRegistry) HasReg() bool`

HasReg returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchedHotelInterfaceControllerRegistry) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchedHotelInterfaceControllerRegistry) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchedHotelInterfaceControllerRegistry) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchedHotelInterfaceControllerRegistry) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


