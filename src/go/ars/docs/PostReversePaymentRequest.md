# PostReversePaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArPayment** | Pointer to [**ReversePaymentCriteriaType**](ReversePaymentCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostReversePaymentRequest

`func NewPostReversePaymentRequest() *PostReversePaymentRequest`

NewPostReversePaymentRequest instantiates a new PostReversePaymentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostReversePaymentRequestWithDefaults

`func NewPostReversePaymentRequestWithDefaults() *PostReversePaymentRequest`

NewPostReversePaymentRequestWithDefaults instantiates a new PostReversePaymentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArPayment

`func (o *PostReversePaymentRequest) GetArPayment() ReversePaymentCriteriaType`

GetArPayment returns the ArPayment field if non-nil, zero value otherwise.

### GetArPaymentOk

`func (o *PostReversePaymentRequest) GetArPaymentOk() (*ReversePaymentCriteriaType, bool)`

GetArPaymentOk returns a tuple with the ArPayment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArPayment

`func (o *PostReversePaymentRequest) SetArPayment(v ReversePaymentCriteriaType)`

SetArPayment sets ArPayment field to given value.

### HasArPayment

`func (o *PostReversePaymentRequest) HasArPayment() bool`

HasArPayment returns a boolean if a field has been set.

### GetLinks

`func (o *PostReversePaymentRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostReversePaymentRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostReversePaymentRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostReversePaymentRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostReversePaymentRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostReversePaymentRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostReversePaymentRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostReversePaymentRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


