# VIPStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Used for Character Strings, length 0 to 2000. | [optional] 
**Code** | Pointer to **string** | VIP status of the customer. | [optional] 

## Methods

### NewVIPStatusType

`func NewVIPStatusType() *VIPStatusType`

NewVIPStatusType instantiates a new VIPStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVIPStatusTypeWithDefaults

`func NewVIPStatusTypeWithDefaults() *VIPStatusType`

NewVIPStatusTypeWithDefaults instantiates a new VIPStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *VIPStatusType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *VIPStatusType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *VIPStatusType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *VIPStatusType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetCode

`func (o *VIPStatusType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *VIPStatusType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *VIPStatusType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *VIPStatusType) HasCode() bool`

HasCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


