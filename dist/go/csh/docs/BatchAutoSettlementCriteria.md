# BatchAutoSettlementCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**AutoSettlementType**](AutoSettlementType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBatchAutoSettlementCriteria

`func NewBatchAutoSettlementCriteria() *BatchAutoSettlementCriteria`

NewBatchAutoSettlementCriteria instantiates a new BatchAutoSettlementCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchAutoSettlementCriteriaWithDefaults

`func NewBatchAutoSettlementCriteriaWithDefaults() *BatchAutoSettlementCriteria`

NewBatchAutoSettlementCriteriaWithDefaults instantiates a new BatchAutoSettlementCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *BatchAutoSettlementCriteria) GetCriteria() AutoSettlementType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *BatchAutoSettlementCriteria) GetCriteriaOk() (*AutoSettlementType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *BatchAutoSettlementCriteria) SetCriteria(v AutoSettlementType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *BatchAutoSettlementCriteria) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *BatchAutoSettlementCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BatchAutoSettlementCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BatchAutoSettlementCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BatchAutoSettlementCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BatchAutoSettlementCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BatchAutoSettlementCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BatchAutoSettlementCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BatchAutoSettlementCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


