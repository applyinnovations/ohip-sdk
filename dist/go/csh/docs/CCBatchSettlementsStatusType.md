# CCBatchSettlementsStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | Pointer to **string** | Batch Id for identify status of job. | [optional] 
**CCBatchSettlementsStatus** | Pointer to [**[]CCBatchSettlementStatusType**](CCBatchSettlementStatusType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Code | [optional] 

## Methods

### NewCCBatchSettlementsStatusType

`func NewCCBatchSettlementsStatusType() *CCBatchSettlementsStatusType`

NewCCBatchSettlementsStatusType instantiates a new CCBatchSettlementsStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCCBatchSettlementsStatusTypeWithDefaults

`func NewCCBatchSettlementsStatusTypeWithDefaults() *CCBatchSettlementsStatusType`

NewCCBatchSettlementsStatusTypeWithDefaults instantiates a new CCBatchSettlementsStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchId

`func (o *CCBatchSettlementsStatusType) GetBatchId() string`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *CCBatchSettlementsStatusType) GetBatchIdOk() (*string, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *CCBatchSettlementsStatusType) SetBatchId(v string)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *CCBatchSettlementsStatusType) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.

### GetCCBatchSettlementsStatus

`func (o *CCBatchSettlementsStatusType) GetCCBatchSettlementsStatus() []CCBatchSettlementStatusType`

GetCCBatchSettlementsStatus returns the CCBatchSettlementsStatus field if non-nil, zero value otherwise.

### GetCCBatchSettlementsStatusOk

`func (o *CCBatchSettlementsStatusType) GetCCBatchSettlementsStatusOk() (*[]CCBatchSettlementStatusType, bool)`

GetCCBatchSettlementsStatusOk returns a tuple with the CCBatchSettlementsStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCCBatchSettlementsStatus

`func (o *CCBatchSettlementsStatusType) SetCCBatchSettlementsStatus(v []CCBatchSettlementStatusType)`

SetCCBatchSettlementsStatus sets CCBatchSettlementsStatus field to given value.

### HasCCBatchSettlementsStatus

`func (o *CCBatchSettlementsStatusType) HasCCBatchSettlementsStatus() bool`

HasCCBatchSettlementsStatus returns a boolean if a field has been set.

### GetHotelId

`func (o *CCBatchSettlementsStatusType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CCBatchSettlementsStatusType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CCBatchSettlementsStatusType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CCBatchSettlementsStatusType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


