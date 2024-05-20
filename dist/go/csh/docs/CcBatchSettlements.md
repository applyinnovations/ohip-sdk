# CcBatchSettlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchSettlements** | Pointer to [**[]CCBatchSettlementType**](CCBatchSettlementType.md) | List of Settlement transaction details for credit card transaction. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCcBatchSettlements

`func NewCcBatchSettlements() *CcBatchSettlements`

NewCcBatchSettlements instantiates a new CcBatchSettlements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCcBatchSettlementsWithDefaults

`func NewCcBatchSettlementsWithDefaults() *CcBatchSettlements`

NewCcBatchSettlementsWithDefaults instantiates a new CcBatchSettlements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchSettlements

`func (o *CcBatchSettlements) GetBatchSettlements() []CCBatchSettlementType`

GetBatchSettlements returns the BatchSettlements field if non-nil, zero value otherwise.

### GetBatchSettlementsOk

`func (o *CcBatchSettlements) GetBatchSettlementsOk() (*[]CCBatchSettlementType, bool)`

GetBatchSettlementsOk returns a tuple with the BatchSettlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchSettlements

`func (o *CcBatchSettlements) SetBatchSettlements(v []CCBatchSettlementType)`

SetBatchSettlements sets BatchSettlements field to given value.

### HasBatchSettlements

`func (o *CcBatchSettlements) HasBatchSettlements() bool`

HasBatchSettlements returns a boolean if a field has been set.

### GetLinks

`func (o *CcBatchSettlements) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CcBatchSettlements) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CcBatchSettlements) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CcBatchSettlements) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CcBatchSettlements) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CcBatchSettlements) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CcBatchSettlements) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CcBatchSettlements) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


