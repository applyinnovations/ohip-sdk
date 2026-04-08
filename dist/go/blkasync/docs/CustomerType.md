# CustomerType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PersonName** | Pointer to [**[]PersonNameType**](PersonNameType.md) | Detailed name information for thecustomer. | [optional] 

## Methods

### NewCustomerType

`func NewCustomerType() *CustomerType`

NewCustomerType instantiates a new CustomerType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerTypeWithDefaults

`func NewCustomerTypeWithDefaults() *CustomerType`

NewCustomerTypeWithDefaults instantiates a new CustomerType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPersonName

`func (o *CustomerType) GetPersonName() []PersonNameType`

GetPersonName returns the PersonName field if non-nil, zero value otherwise.

### GetPersonNameOk

`func (o *CustomerType) GetPersonNameOk() (*[]PersonNameType, bool)`

GetPersonNameOk returns a tuple with the PersonName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonName

`func (o *CustomerType) SetPersonName(v []PersonNameType)`

SetPersonName sets PersonName field to given value.

### HasPersonName

`func (o *CustomerType) HasPersonName() bool`

HasPersonName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


