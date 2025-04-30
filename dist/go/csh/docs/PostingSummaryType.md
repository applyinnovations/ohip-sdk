# PostingSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalPostings** | Pointer to **int32** | Total count of postings. | [optional] 
**TotalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalCheckCount** | Pointer to **int32** | Total count of checks posted. | [optional] 

## Methods

### NewPostingSummaryType

`func NewPostingSummaryType() *PostingSummaryType`

NewPostingSummaryType instantiates a new PostingSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostingSummaryTypeWithDefaults

`func NewPostingSummaryTypeWithDefaults() *PostingSummaryType`

NewPostingSummaryTypeWithDefaults instantiates a new PostingSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalPostings

`func (o *PostingSummaryType) GetTotalPostings() int32`

GetTotalPostings returns the TotalPostings field if non-nil, zero value otherwise.

### GetTotalPostingsOk

`func (o *PostingSummaryType) GetTotalPostingsOk() (*int32, bool)`

GetTotalPostingsOk returns a tuple with the TotalPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPostings

`func (o *PostingSummaryType) SetTotalPostings(v int32)`

SetTotalPostings sets TotalPostings field to given value.

### HasTotalPostings

`func (o *PostingSummaryType) HasTotalPostings() bool`

HasTotalPostings returns a boolean if a field has been set.

### GetTotalAmount

`func (o *PostingSummaryType) GetTotalAmount() CurrencyAmountType`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *PostingSummaryType) GetTotalAmountOk() (*CurrencyAmountType, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *PostingSummaryType) SetTotalAmount(v CurrencyAmountType)`

SetTotalAmount sets TotalAmount field to given value.

### HasTotalAmount

`func (o *PostingSummaryType) HasTotalAmount() bool`

HasTotalAmount returns a boolean if a field has been set.

### GetTotalCheckCount

`func (o *PostingSummaryType) GetTotalCheckCount() int32`

GetTotalCheckCount returns the TotalCheckCount field if non-nil, zero value otherwise.

### GetTotalCheckCountOk

`func (o *PostingSummaryType) GetTotalCheckCountOk() (*int32, bool)`

GetTotalCheckCountOk returns a tuple with the TotalCheckCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCheckCount

`func (o *PostingSummaryType) SetTotalCheckCount(v int32)`

SetTotalCheckCount sets TotalCheckCount field to given value.

### HasTotalCheckCount

`func (o *PostingSummaryType) HasTotalCheckCount() bool`

HasTotalCheckCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


