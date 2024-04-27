# ARYearViewInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalOutstanding** | Pointer to [**ARBalanceType**](ARBalanceType.md) |  | [optional] 
**YearView** | Pointer to [**[]ARYearViewType**](ARYearViewType.md) | The debit and credit balance per account. | [optional] 

## Methods

### NewARYearViewInfoType

`func NewARYearViewInfoType() *ARYearViewInfoType`

NewARYearViewInfoType instantiates a new ARYearViewInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARYearViewInfoTypeWithDefaults

`func NewARYearViewInfoTypeWithDefaults() *ARYearViewInfoType`

NewARYearViewInfoTypeWithDefaults instantiates a new ARYearViewInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalOutstanding

`func (o *ARYearViewInfoType) GetTotalOutstanding() ARBalanceType`

GetTotalOutstanding returns the TotalOutstanding field if non-nil, zero value otherwise.

### GetTotalOutstandingOk

`func (o *ARYearViewInfoType) GetTotalOutstandingOk() (*ARBalanceType, bool)`

GetTotalOutstandingOk returns a tuple with the TotalOutstanding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOutstanding

`func (o *ARYearViewInfoType) SetTotalOutstanding(v ARBalanceType)`

SetTotalOutstanding sets TotalOutstanding field to given value.

### HasTotalOutstanding

`func (o *ARYearViewInfoType) HasTotalOutstanding() bool`

HasTotalOutstanding returns a boolean if a field has been set.

### GetYearView

`func (o *ARYearViewInfoType) GetYearView() []ARYearViewType`

GetYearView returns the YearView field if non-nil, zero value otherwise.

### GetYearViewOk

`func (o *ARYearViewInfoType) GetYearViewOk() (*[]ARYearViewType, bool)`

GetYearViewOk returns a tuple with the YearView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYearView

`func (o *ARYearViewInfoType) SetYearView(v []ARYearViewType)`

SetYearView sets YearView field to given value.

### HasYearView

`func (o *ARYearViewInfoType) HasYearView() bool`

HasYearView returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


