# PersonNameType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GivenName** | Pointer to **string** | Given name, first name or names. | [optional] 
**Surname** | Pointer to **string** | Family name, last name. | [optional] 

## Methods

### NewPersonNameType

`func NewPersonNameType() *PersonNameType`

NewPersonNameType instantiates a new PersonNameType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPersonNameTypeWithDefaults

`func NewPersonNameTypeWithDefaults() *PersonNameType`

NewPersonNameTypeWithDefaults instantiates a new PersonNameType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGivenName

`func (o *PersonNameType) GetGivenName() string`

GetGivenName returns the GivenName field if non-nil, zero value otherwise.

### GetGivenNameOk

`func (o *PersonNameType) GetGivenNameOk() (*string, bool)`

GetGivenNameOk returns a tuple with the GivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGivenName

`func (o *PersonNameType) SetGivenName(v string)`

SetGivenName sets GivenName field to given value.

### HasGivenName

`func (o *PersonNameType) HasGivenName() bool`

HasGivenName returns a boolean if a field has been set.

### GetSurname

`func (o *PersonNameType) GetSurname() string`

GetSurname returns the Surname field if non-nil, zero value otherwise.

### GetSurnameOk

`func (o *PersonNameType) GetSurnameOk() (*string, bool)`

GetSurnameOk returns a tuple with the Surname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurname

`func (o *PersonNameType) SetSurname(v string)`

SetSurname sets Surname field to given value.

### HasSurname

`func (o *PersonNameType) HasSurname() bool`

HasSurname returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


