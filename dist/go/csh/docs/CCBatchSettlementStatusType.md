# CCBatchSettlementStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reason** | Pointer to **string** | Batch Id for identify status of job. | [optional] 
**SettlementId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**SettlementStatus** | Pointer to **string** | Status of credit card settlements. | [optional] 

## Methods

### NewCCBatchSettlementStatusType

`func NewCCBatchSettlementStatusType() *CCBatchSettlementStatusType`

NewCCBatchSettlementStatusType instantiates a new CCBatchSettlementStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCCBatchSettlementStatusTypeWithDefaults

`func NewCCBatchSettlementStatusTypeWithDefaults() *CCBatchSettlementStatusType`

NewCCBatchSettlementStatusTypeWithDefaults instantiates a new CCBatchSettlementStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReason

`func (o *CCBatchSettlementStatusType) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *CCBatchSettlementStatusType) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *CCBatchSettlementStatusType) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *CCBatchSettlementStatusType) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetSettlementId

`func (o *CCBatchSettlementStatusType) GetSettlementId() UniqueIDType`

GetSettlementId returns the SettlementId field if non-nil, zero value otherwise.

### GetSettlementIdOk

`func (o *CCBatchSettlementStatusType) GetSettlementIdOk() (*UniqueIDType, bool)`

GetSettlementIdOk returns a tuple with the SettlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementId

`func (o *CCBatchSettlementStatusType) SetSettlementId(v UniqueIDType)`

SetSettlementId sets SettlementId field to given value.

### HasSettlementId

`func (o *CCBatchSettlementStatusType) HasSettlementId() bool`

HasSettlementId returns a boolean if a field has been set.

### GetSettlementStatus

`func (o *CCBatchSettlementStatusType) GetSettlementStatus() string`

GetSettlementStatus returns the SettlementStatus field if non-nil, zero value otherwise.

### GetSettlementStatusOk

`func (o *CCBatchSettlementStatusType) GetSettlementStatusOk() (*string, bool)`

GetSettlementStatusOk returns a tuple with the SettlementStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementStatus

`func (o *CCBatchSettlementStatusType) SetSettlementStatus(v string)`

SetSettlementStatus sets SettlementStatus field to given value.

### HasSettlementStatus

`func (o *CCBatchSettlementStatusType) HasSettlementStatus() bool`

HasSettlementStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


