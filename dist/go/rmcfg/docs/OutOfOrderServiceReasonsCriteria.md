# OutOfOrderServiceReasonsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OutOfOrderServiceReasons** | Pointer to [**[]OutOfOrderServiceReasonType**](OutOfOrderServiceReasonType.md) | out of order/service reason details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOutOfOrderServiceReasonsCriteria

`func NewOutOfOrderServiceReasonsCriteria() *OutOfOrderServiceReasonsCriteria`

NewOutOfOrderServiceReasonsCriteria instantiates a new OutOfOrderServiceReasonsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutOfOrderServiceReasonsCriteriaWithDefaults

`func NewOutOfOrderServiceReasonsCriteriaWithDefaults() *OutOfOrderServiceReasonsCriteria`

NewOutOfOrderServiceReasonsCriteriaWithDefaults instantiates a new OutOfOrderServiceReasonsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOutOfOrderServiceReasons

`func (o *OutOfOrderServiceReasonsCriteria) GetOutOfOrderServiceReasons() []OutOfOrderServiceReasonType`

GetOutOfOrderServiceReasons returns the OutOfOrderServiceReasons field if non-nil, zero value otherwise.

### GetOutOfOrderServiceReasonsOk

`func (o *OutOfOrderServiceReasonsCriteria) GetOutOfOrderServiceReasonsOk() (*[]OutOfOrderServiceReasonType, bool)`

GetOutOfOrderServiceReasonsOk returns a tuple with the OutOfOrderServiceReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutOfOrderServiceReasons

`func (o *OutOfOrderServiceReasonsCriteria) SetOutOfOrderServiceReasons(v []OutOfOrderServiceReasonType)`

SetOutOfOrderServiceReasons sets OutOfOrderServiceReasons field to given value.

### HasOutOfOrderServiceReasons

`func (o *OutOfOrderServiceReasonsCriteria) HasOutOfOrderServiceReasons() bool`

HasOutOfOrderServiceReasons returns a boolean if a field has been set.

### GetLinks

`func (o *OutOfOrderServiceReasonsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OutOfOrderServiceReasonsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OutOfOrderServiceReasonsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OutOfOrderServiceReasonsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *OutOfOrderServiceReasonsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OutOfOrderServiceReasonsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OutOfOrderServiceReasonsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OutOfOrderServiceReasonsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


