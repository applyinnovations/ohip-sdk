# CharacterUDFType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. | [optional] 
**Value** | Pointer to **string** | Value of user defined field. | [optional] 
**Altname** | Pointer to **string** | Label of user defined field used by vendors or customers. | [optional] 

## Methods

### NewCharacterUDFType

`func NewCharacterUDFType() *CharacterUDFType`

NewCharacterUDFType instantiates a new CharacterUDFType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCharacterUDFTypeWithDefaults

`func NewCharacterUDFTypeWithDefaults() *CharacterUDFType`

NewCharacterUDFTypeWithDefaults instantiates a new CharacterUDFType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CharacterUDFType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CharacterUDFType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CharacterUDFType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CharacterUDFType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *CharacterUDFType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CharacterUDFType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CharacterUDFType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *CharacterUDFType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetAltname

`func (o *CharacterUDFType) GetAltname() string`

GetAltname returns the Altname field if non-nil, zero value otherwise.

### GetAltnameOk

`func (o *CharacterUDFType) GetAltnameOk() (*string, bool)`

GetAltnameOk returns a tuple with the Altname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAltname

`func (o *CharacterUDFType) SetAltname(v string)`

SetAltname sets Altname field to given value.

### HasAltname

`func (o *CharacterUDFType) HasAltname() bool`

HasAltname returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


