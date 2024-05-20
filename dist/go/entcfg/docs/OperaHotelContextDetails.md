# OperaHotelContextDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelContext** | Pointer to [**OperaHotelContextDetailsHotelContext**](OperaHotelContextDetailsHotelContext.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOperaHotelContextDetails

`func NewOperaHotelContextDetails() *OperaHotelContextDetails`

NewOperaHotelContextDetails instantiates a new OperaHotelContextDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOperaHotelContextDetailsWithDefaults

`func NewOperaHotelContextDetailsWithDefaults() *OperaHotelContextDetails`

NewOperaHotelContextDetailsWithDefaults instantiates a new OperaHotelContextDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelContext

`func (o *OperaHotelContextDetails) GetHotelContext() OperaHotelContextDetailsHotelContext`

GetHotelContext returns the HotelContext field if non-nil, zero value otherwise.

### GetHotelContextOk

`func (o *OperaHotelContextDetails) GetHotelContextOk() (*OperaHotelContextDetailsHotelContext, bool)`

GetHotelContextOk returns a tuple with the HotelContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelContext

`func (o *OperaHotelContextDetails) SetHotelContext(v OperaHotelContextDetailsHotelContext)`

SetHotelContext sets HotelContext field to given value.

### HasHotelContext

`func (o *OperaHotelContextDetails) HasHotelContext() bool`

HasHotelContext returns a boolean if a field has been set.

### GetLinks

`func (o *OperaHotelContextDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OperaHotelContextDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OperaHotelContextDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OperaHotelContextDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *OperaHotelContextDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OperaHotelContextDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OperaHotelContextDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OperaHotelContextDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


