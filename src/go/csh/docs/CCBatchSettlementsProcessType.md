# CCBatchSettlementsProcessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | Pointer to **string** | Batch Id for identify status of job. | [optional] 
**HotelId** | Pointer to **string** | Hotel code of the reservation. | [optional] 
**SettlementIdList** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 

## Methods

### NewCCBatchSettlementsProcessType

`func NewCCBatchSettlementsProcessType() *CCBatchSettlementsProcessType`

NewCCBatchSettlementsProcessType instantiates a new CCBatchSettlementsProcessType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCCBatchSettlementsProcessTypeWithDefaults

`func NewCCBatchSettlementsProcessTypeWithDefaults() *CCBatchSettlementsProcessType`

NewCCBatchSettlementsProcessTypeWithDefaults instantiates a new CCBatchSettlementsProcessType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchId

`func (o *CCBatchSettlementsProcessType) GetBatchId() string`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *CCBatchSettlementsProcessType) GetBatchIdOk() (*string, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *CCBatchSettlementsProcessType) SetBatchId(v string)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *CCBatchSettlementsProcessType) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.

### GetHotelId

`func (o *CCBatchSettlementsProcessType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CCBatchSettlementsProcessType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CCBatchSettlementsProcessType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CCBatchSettlementsProcessType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSettlementIdList

`func (o *CCBatchSettlementsProcessType) GetSettlementIdList() UniqueIDListType`

GetSettlementIdList returns the SettlementIdList field if non-nil, zero value otherwise.

### GetSettlementIdListOk

`func (o *CCBatchSettlementsProcessType) GetSettlementIdListOk() (*UniqueIDListType, bool)`

GetSettlementIdListOk returns a tuple with the SettlementIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettlementIdList

`func (o *CCBatchSettlementsProcessType) SetSettlementIdList(v UniqueIDListType)`

SetSettlementIdList sets SettlementIdList field to given value.

### HasSettlementIdList

`func (o *CCBatchSettlementsProcessType) HasSettlementIdList() bool`

HasSettlementIdList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


