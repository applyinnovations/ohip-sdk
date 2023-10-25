# ChangeCommissionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionDetail** | Pointer to [**CommissionBaseDetailType**](CommissionBaseDetailType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeCommissionRequest

`func NewChangeCommissionRequest() *ChangeCommissionRequest`

NewChangeCommissionRequest instantiates a new ChangeCommissionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeCommissionRequestWithDefaults

`func NewChangeCommissionRequestWithDefaults() *ChangeCommissionRequest`

NewChangeCommissionRequestWithDefaults instantiates a new ChangeCommissionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionDetail

`func (o *ChangeCommissionRequest) GetCommissionDetail() CommissionBaseDetailType`

GetCommissionDetail returns the CommissionDetail field if non-nil, zero value otherwise.

### GetCommissionDetailOk

`func (o *ChangeCommissionRequest) GetCommissionDetailOk() (*CommissionBaseDetailType, bool)`

GetCommissionDetailOk returns a tuple with the CommissionDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionDetail

`func (o *ChangeCommissionRequest) SetCommissionDetail(v CommissionBaseDetailType)`

SetCommissionDetail sets CommissionDetail field to given value.

### HasCommissionDetail

`func (o *ChangeCommissionRequest) HasCommissionDetail() bool`

HasCommissionDetail returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeCommissionRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeCommissionRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeCommissionRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeCommissionRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeCommissionRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeCommissionRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeCommissionRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeCommissionRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


