# OverlappingStayDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**OverlappingStayMessages** | Pointer to [**[]ValidationReturnType**](ValidationReturnType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOverlappingStayDetails

`func NewOverlappingStayDetails() *OverlappingStayDetails`

NewOverlappingStayDetails instantiates a new OverlappingStayDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOverlappingStayDetailsWithDefaults

`func NewOverlappingStayDetailsWithDefaults() *OverlappingStayDetails`

NewOverlappingStayDetailsWithDefaults instantiates a new OverlappingStayDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *OverlappingStayDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OverlappingStayDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OverlappingStayDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OverlappingStayDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOverlappingStayMessages

`func (o *OverlappingStayDetails) GetOverlappingStayMessages() []ValidationReturnType`

GetOverlappingStayMessages returns the OverlappingStayMessages field if non-nil, zero value otherwise.

### GetOverlappingStayMessagesOk

`func (o *OverlappingStayDetails) GetOverlappingStayMessagesOk() (*[]ValidationReturnType, bool)`

GetOverlappingStayMessagesOk returns a tuple with the OverlappingStayMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverlappingStayMessages

`func (o *OverlappingStayDetails) SetOverlappingStayMessages(v []ValidationReturnType)`

SetOverlappingStayMessages sets OverlappingStayMessages field to given value.

### HasOverlappingStayMessages

`func (o *OverlappingStayDetails) HasOverlappingStayMessages() bool`

HasOverlappingStayMessages returns a boolean if a field has been set.

### GetWarnings

`func (o *OverlappingStayDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OverlappingStayDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OverlappingStayDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OverlappingStayDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


