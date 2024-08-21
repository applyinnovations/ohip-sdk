# ARAgingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Aging** | Pointer to [**[]ARAgingType**](ARAgingType.md) | The debit and credit balance per Aging bucket. | [optional] 
**TotalOutstanding** | Pointer to [**ARBalanceType**](ARBalanceType.md) |  | [optional] 

## Methods

### NewARAgingInfoType

`func NewARAgingInfoType() *ARAgingInfoType`

NewARAgingInfoType instantiates a new ARAgingInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAgingInfoTypeWithDefaults

`func NewARAgingInfoTypeWithDefaults() *ARAgingInfoType`

NewARAgingInfoTypeWithDefaults instantiates a new ARAgingInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAging

`func (o *ARAgingInfoType) GetAging() []ARAgingType`

GetAging returns the Aging field if non-nil, zero value otherwise.

### GetAgingOk

`func (o *ARAgingInfoType) GetAgingOk() (*[]ARAgingType, bool)`

GetAgingOk returns a tuple with the Aging field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAging

`func (o *ARAgingInfoType) SetAging(v []ARAgingType)`

SetAging sets Aging field to given value.

### HasAging

`func (o *ARAgingInfoType) HasAging() bool`

HasAging returns a boolean if a field has been set.

### GetTotalOutstanding

`func (o *ARAgingInfoType) GetTotalOutstanding() ARBalanceType`

GetTotalOutstanding returns the TotalOutstanding field if non-nil, zero value otherwise.

### GetTotalOutstandingOk

`func (o *ARAgingInfoType) GetTotalOutstandingOk() (*ARBalanceType, bool)`

GetTotalOutstandingOk returns a tuple with the TotalOutstanding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOutstanding

`func (o *ARAgingInfoType) SetTotalOutstanding(v ARBalanceType)`

SetTotalOutstanding sets TotalOutstanding field to given value.

### HasTotalOutstanding

`func (o *ARAgingInfoType) HasTotalOutstanding() bool`

HasTotalOutstanding returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


