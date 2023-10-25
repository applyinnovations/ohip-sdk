# CateringEventsBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CateringEventsBulkUpdate** | Pointer to [**CateringEventsBulkUpdateType**](CateringEventsBulkUpdateType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewCateringEventsBulkUpdateRequest

`func NewCateringEventsBulkUpdateRequest() *CateringEventsBulkUpdateRequest`

NewCateringEventsBulkUpdateRequest instantiates a new CateringEventsBulkUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventsBulkUpdateRequestWithDefaults

`func NewCateringEventsBulkUpdateRequestWithDefaults() *CateringEventsBulkUpdateRequest`

NewCateringEventsBulkUpdateRequestWithDefaults instantiates a new CateringEventsBulkUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCateringEventsBulkUpdate

`func (o *CateringEventsBulkUpdateRequest) GetCateringEventsBulkUpdate() CateringEventsBulkUpdateType`

GetCateringEventsBulkUpdate returns the CateringEventsBulkUpdate field if non-nil, zero value otherwise.

### GetCateringEventsBulkUpdateOk

`func (o *CateringEventsBulkUpdateRequest) GetCateringEventsBulkUpdateOk() (*CateringEventsBulkUpdateType, bool)`

GetCateringEventsBulkUpdateOk returns a tuple with the CateringEventsBulkUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringEventsBulkUpdate

`func (o *CateringEventsBulkUpdateRequest) SetCateringEventsBulkUpdate(v CateringEventsBulkUpdateType)`

SetCateringEventsBulkUpdate sets CateringEventsBulkUpdate field to given value.

### HasCateringEventsBulkUpdate

`func (o *CateringEventsBulkUpdateRequest) HasCateringEventsBulkUpdate() bool`

HasCateringEventsBulkUpdate returns a boolean if a field has been set.

### GetLinks

`func (o *CateringEventsBulkUpdateRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringEventsBulkUpdateRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringEventsBulkUpdateRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringEventsBulkUpdateRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringEventsBulkUpdateRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringEventsBulkUpdateRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringEventsBulkUpdateRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringEventsBulkUpdateRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


