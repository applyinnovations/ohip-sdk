# PostedBillingPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Postings** | Pointer to [**[]SummaryPostingType**](SummaryPostingType.md) | List of postings. | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostedBillingPayment

`func NewPostedBillingPayment() *PostedBillingPayment`

NewPostedBillingPayment instantiates a new PostedBillingPayment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostedBillingPaymentWithDefaults

`func NewPostedBillingPaymentWithDefaults() *PostedBillingPayment`

NewPostedBillingPaymentWithDefaults instantiates a new PostedBillingPayment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPostings

`func (o *PostedBillingPayment) GetPostings() []SummaryPostingType`

GetPostings returns the Postings field if non-nil, zero value otherwise.

### GetPostingsOk

`func (o *PostedBillingPayment) GetPostingsOk() (*[]SummaryPostingType, bool)`

GetPostingsOk returns a tuple with the Postings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostings

`func (o *PostedBillingPayment) SetPostings(v []SummaryPostingType)`

SetPostings sets Postings field to given value.

### HasPostings

`func (o *PostedBillingPayment) HasPostings() bool`

HasPostings returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *PostedBillingPayment) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *PostedBillingPayment) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *PostedBillingPayment) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *PostedBillingPayment) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetLinks

`func (o *PostedBillingPayment) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostedBillingPayment) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostedBillingPayment) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostedBillingPayment) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostedBillingPayment) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostedBillingPayment) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostedBillingPayment) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostedBillingPayment) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


