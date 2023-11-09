# ChangeCreditCardTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditCardTypes** | Pointer to [**CreditCardTypesType**](CreditCardTypesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeCreditCardTypesRequest

`func NewChangeCreditCardTypesRequest() *ChangeCreditCardTypesRequest`

NewChangeCreditCardTypesRequest instantiates a new ChangeCreditCardTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeCreditCardTypesRequestWithDefaults

`func NewChangeCreditCardTypesRequestWithDefaults() *ChangeCreditCardTypesRequest`

NewChangeCreditCardTypesRequestWithDefaults instantiates a new ChangeCreditCardTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditCardTypes

`func (o *ChangeCreditCardTypesRequest) GetCreditCardTypes() CreditCardTypesType`

GetCreditCardTypes returns the CreditCardTypes field if non-nil, zero value otherwise.

### GetCreditCardTypesOk

`func (o *ChangeCreditCardTypesRequest) GetCreditCardTypesOk() (*CreditCardTypesType, bool)`

GetCreditCardTypesOk returns a tuple with the CreditCardTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardTypes

`func (o *ChangeCreditCardTypesRequest) SetCreditCardTypes(v CreditCardTypesType)`

SetCreditCardTypes sets CreditCardTypes field to given value.

### HasCreditCardTypes

`func (o *ChangeCreditCardTypesRequest) HasCreditCardTypes() bool`

HasCreditCardTypes returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeCreditCardTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeCreditCardTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeCreditCardTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeCreditCardTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeCreditCardTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeCreditCardTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeCreditCardTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeCreditCardTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


