# PostBatchDepositRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchDeposit** | Pointer to [**BatchDepositType**](BatchDepositType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostBatchDepositRequest

`func NewPostBatchDepositRequest() *PostBatchDepositRequest`

NewPostBatchDepositRequest instantiates a new PostBatchDepositRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBatchDepositRequestWithDefaults

`func NewPostBatchDepositRequestWithDefaults() *PostBatchDepositRequest`

NewPostBatchDepositRequestWithDefaults instantiates a new PostBatchDepositRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchDeposit

`func (o *PostBatchDepositRequest) GetBatchDeposit() BatchDepositType`

GetBatchDeposit returns the BatchDeposit field if non-nil, zero value otherwise.

### GetBatchDepositOk

`func (o *PostBatchDepositRequest) GetBatchDepositOk() (*BatchDepositType, bool)`

GetBatchDepositOk returns a tuple with the BatchDeposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchDeposit

`func (o *PostBatchDepositRequest) SetBatchDeposit(v BatchDepositType)`

SetBatchDeposit sets BatchDeposit field to given value.

### HasBatchDeposit

`func (o *PostBatchDepositRequest) HasBatchDeposit() bool`

HasBatchDeposit returns a boolean if a field has been set.

### GetLinks

`func (o *PostBatchDepositRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBatchDepositRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBatchDepositRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBatchDepositRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBatchDepositRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBatchDepositRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBatchDepositRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBatchDepositRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


