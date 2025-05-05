# CountryNameType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Used for Character Strings, length 0 to 200. | [optional] 
**Code** | Pointer to **string** | Code for a country or a nationality. | [optional] 
**DisplayCountryFlag** | Pointer to **bool** | Setting this to true will display the guest profile&#39;s country flag in the OPERA Cloud user interface, if it is configured. | [optional] 
**IsoCode** | Pointer to **string** | ISO standard code for country. | [optional] 

## Methods

### NewCountryNameType

`func NewCountryNameType() *CountryNameType`

NewCountryNameType instantiates a new CountryNameType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCountryNameTypeWithDefaults

`func NewCountryNameTypeWithDefaults() *CountryNameType`

NewCountryNameTypeWithDefaults instantiates a new CountryNameType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *CountryNameType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CountryNameType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CountryNameType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *CountryNameType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetCode

`func (o *CountryNameType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CountryNameType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CountryNameType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *CountryNameType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDisplayCountryFlag

`func (o *CountryNameType) GetDisplayCountryFlag() bool`

GetDisplayCountryFlag returns the DisplayCountryFlag field if non-nil, zero value otherwise.

### GetDisplayCountryFlagOk

`func (o *CountryNameType) GetDisplayCountryFlagOk() (*bool, bool)`

GetDisplayCountryFlagOk returns a tuple with the DisplayCountryFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayCountryFlag

`func (o *CountryNameType) SetDisplayCountryFlag(v bool)`

SetDisplayCountryFlag sets DisplayCountryFlag field to given value.

### HasDisplayCountryFlag

`func (o *CountryNameType) HasDisplayCountryFlag() bool`

HasDisplayCountryFlag returns a boolean if a field has been set.

### GetIsoCode

`func (o *CountryNameType) GetIsoCode() string`

GetIsoCode returns the IsoCode field if non-nil, zero value otherwise.

### GetIsoCodeOk

`func (o *CountryNameType) GetIsoCodeOk() (*string, bool)`

GetIsoCodeOk returns a tuple with the IsoCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsoCode

`func (o *CountryNameType) SetIsoCode(v string)`

SetIsoCode sets IsoCode field to given value.

### HasIsoCode

`func (o *CountryNameType) HasIsoCode() bool`

HasIsoCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


