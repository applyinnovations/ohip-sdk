# CcBatchSettlementsStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchSettlementsStatus** | Pointer to [**CCBatchSettlementsStatusType**](CCBatchSettlementsStatusType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCcBatchSettlementsStatus

`func NewCcBatchSettlementsStatus() *CcBatchSettlementsStatus`

NewCcBatchSettlementsStatus instantiates a new CcBatchSettlementsStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCcBatchSettlementsStatusWithDefaults

`func NewCcBatchSettlementsStatusWithDefaults() *CcBatchSettlementsStatus`

NewCcBatchSettlementsStatusWithDefaults instantiates a new CcBatchSettlementsStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchSettlementsStatus

`func (o *CcBatchSettlementsStatus) GetBatchSettlementsStatus() CCBatchSettlementsStatusType`

GetBatchSettlementsStatus returns the BatchSettlementsStatus field if non-nil, zero value otherwise.

### GetBatchSettlementsStatusOk

`func (o *CcBatchSettlementsStatus) GetBatchSettlementsStatusOk() (*CCBatchSettlementsStatusType, bool)`

GetBatchSettlementsStatusOk returns a tuple with the BatchSettlementsStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchSettlementsStatus

`func (o *CcBatchSettlementsStatus) SetBatchSettlementsStatus(v CCBatchSettlementsStatusType)`

SetBatchSettlementsStatus sets BatchSettlementsStatus field to given value.

### HasBatchSettlementsStatus

`func (o *CcBatchSettlementsStatus) HasBatchSettlementsStatus() bool`

HasBatchSettlementsStatus returns a boolean if a field has been set.

### GetLinks

`func (o *CcBatchSettlementsStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CcBatchSettlementsStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CcBatchSettlementsStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CcBatchSettlementsStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CcBatchSettlementsStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CcBatchSettlementsStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CcBatchSettlementsStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CcBatchSettlementsStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


