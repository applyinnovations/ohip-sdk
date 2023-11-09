# PostBillingPaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdvanceDeposit** | Pointer to **bool** | Flag to indicate if the advance bill is being posted from deposits prior to check-in | [optional] 
**Criteria** | Pointer to [**BillingPaymentCriteria**](BillingPaymentCriteria.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostBillingPaymentRequest

`func NewPostBillingPaymentRequest() *PostBillingPaymentRequest`

NewPostBillingPaymentRequest instantiates a new PostBillingPaymentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBillingPaymentRequestWithDefaults

`func NewPostBillingPaymentRequestWithDefaults() *PostBillingPaymentRequest`

NewPostBillingPaymentRequestWithDefaults instantiates a new PostBillingPaymentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdvanceDeposit

`func (o *PostBillingPaymentRequest) GetAdvanceDeposit() bool`

GetAdvanceDeposit returns the AdvanceDeposit field if non-nil, zero value otherwise.

### GetAdvanceDepositOk

`func (o *PostBillingPaymentRequest) GetAdvanceDepositOk() (*bool, bool)`

GetAdvanceDepositOk returns a tuple with the AdvanceDeposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceDeposit

`func (o *PostBillingPaymentRequest) SetAdvanceDeposit(v bool)`

SetAdvanceDeposit sets AdvanceDeposit field to given value.

### HasAdvanceDeposit

`func (o *PostBillingPaymentRequest) HasAdvanceDeposit() bool`

HasAdvanceDeposit returns a boolean if a field has been set.

### GetCriteria

`func (o *PostBillingPaymentRequest) GetCriteria() BillingPaymentCriteria`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PostBillingPaymentRequest) GetCriteriaOk() (*BillingPaymentCriteria, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PostBillingPaymentRequest) SetCriteria(v BillingPaymentCriteria)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PostBillingPaymentRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *PostBillingPaymentRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBillingPaymentRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBillingPaymentRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBillingPaymentRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBillingPaymentRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBillingPaymentRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBillingPaymentRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBillingPaymentRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


