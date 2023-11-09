# PostedBillingPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Postings** | Pointer to [**SummaryPostingsType**](SummaryPostingsType.md) |  | [optional] 
**TrxCodesInfo** | Pointer to [**TrxCodesInfoType**](TrxCodesInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

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

### GetLinks

`func (o *PostedBillingPayment) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostedBillingPayment) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostedBillingPayment) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostedBillingPayment) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPostings

`func (o *PostedBillingPayment) GetPostings() SummaryPostingsType`

GetPostings returns the Postings field if non-nil, zero value otherwise.

### GetPostingsOk

`func (o *PostedBillingPayment) GetPostingsOk() (*SummaryPostingsType, bool)`

GetPostingsOk returns a tuple with the Postings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostings

`func (o *PostedBillingPayment) SetPostings(v SummaryPostingsType)`

SetPostings sets Postings field to given value.

### HasPostings

`func (o *PostedBillingPayment) HasPostings() bool`

HasPostings returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *PostedBillingPayment) GetTrxCodesInfo() TrxCodesInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *PostedBillingPayment) GetTrxCodesInfoOk() (*TrxCodesInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *PostedBillingPayment) SetTrxCodesInfo(v TrxCodesInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *PostedBillingPayment) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *PostedBillingPayment) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostedBillingPayment) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostedBillingPayment) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostedBillingPayment) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


