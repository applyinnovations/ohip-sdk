# FetchedHotelInterfaces

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelInterfaces** | Pointer to [**[]HotelInterfaceType**](HotelInterfaceType.md) | Collection of Hotel Interfaces. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchedHotelInterfaces

`func NewFetchedHotelInterfaces() *FetchedHotelInterfaces`

NewFetchedHotelInterfaces instantiates a new FetchedHotelInterfaces object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchedHotelInterfacesWithDefaults

`func NewFetchedHotelInterfacesWithDefaults() *FetchedHotelInterfaces`

NewFetchedHotelInterfacesWithDefaults instantiates a new FetchedHotelInterfaces object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelInterfaces

`func (o *FetchedHotelInterfaces) GetHotelInterfaces() []HotelInterfaceType`

GetHotelInterfaces returns the HotelInterfaces field if non-nil, zero value otherwise.

### GetHotelInterfacesOk

`func (o *FetchedHotelInterfaces) GetHotelInterfacesOk() (*[]HotelInterfaceType, bool)`

GetHotelInterfacesOk returns a tuple with the HotelInterfaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelInterfaces

`func (o *FetchedHotelInterfaces) SetHotelInterfaces(v []HotelInterfaceType)`

SetHotelInterfaces sets HotelInterfaces field to given value.

### HasHotelInterfaces

`func (o *FetchedHotelInterfaces) HasHotelInterfaces() bool`

HasHotelInterfaces returns a boolean if a field has been set.

### GetLinks

`func (o *FetchedHotelInterfaces) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchedHotelInterfaces) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchedHotelInterfaces) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchedHotelInterfaces) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchedHotelInterfaces) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchedHotelInterfaces) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchedHotelInterfaces) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchedHotelInterfaces) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


