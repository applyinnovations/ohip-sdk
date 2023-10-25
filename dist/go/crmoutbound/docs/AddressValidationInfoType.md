# AddressValidationInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressText** | Pointer to **string** | The suggestion that should be presented to the user as a possible match to their input. | [optional] 
**ExternalAddressId** | Pointer to **string** | The ID of the address recieved as part of an address search validation. | [optional] 
**AddressType** | Pointer to **string** | If the Type is &#39;Address&#39; then the Id can be passed to the Retrieve service. Any other Id should be passed as the Container to a further Find request to get more results. | [optional] 

## Methods

### NewAddressValidationInfoType

`func NewAddressValidationInfoType() *AddressValidationInfoType`

NewAddressValidationInfoType instantiates a new AddressValidationInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddressValidationInfoTypeWithDefaults

`func NewAddressValidationInfoTypeWithDefaults() *AddressValidationInfoType`

NewAddressValidationInfoTypeWithDefaults instantiates a new AddressValidationInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddressText

`func (o *AddressValidationInfoType) GetAddressText() string`

GetAddressText returns the AddressText field if non-nil, zero value otherwise.

### GetAddressTextOk

`func (o *AddressValidationInfoType) GetAddressTextOk() (*string, bool)`

GetAddressTextOk returns a tuple with the AddressText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressText

`func (o *AddressValidationInfoType) SetAddressText(v string)`

SetAddressText sets AddressText field to given value.

### HasAddressText

`func (o *AddressValidationInfoType) HasAddressText() bool`

HasAddressText returns a boolean if a field has been set.

### GetExternalAddressId

`func (o *AddressValidationInfoType) GetExternalAddressId() string`

GetExternalAddressId returns the ExternalAddressId field if non-nil, zero value otherwise.

### GetExternalAddressIdOk

`func (o *AddressValidationInfoType) GetExternalAddressIdOk() (*string, bool)`

GetExternalAddressIdOk returns a tuple with the ExternalAddressId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalAddressId

`func (o *AddressValidationInfoType) SetExternalAddressId(v string)`

SetExternalAddressId sets ExternalAddressId field to given value.

### HasExternalAddressId

`func (o *AddressValidationInfoType) HasExternalAddressId() bool`

HasExternalAddressId returns a boolean if a field has been set.

### GetAddressType

`func (o *AddressValidationInfoType) GetAddressType() string`

GetAddressType returns the AddressType field if non-nil, zero value otherwise.

### GetAddressTypeOk

`func (o *AddressValidationInfoType) GetAddressTypeOk() (*string, bool)`

GetAddressTypeOk returns a tuple with the AddressType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressType

`func (o *AddressValidationInfoType) SetAddressType(v string)`

SetAddressType sets AddressType field to given value.

### HasAddressType

`func (o *AddressValidationInfoType) HasAddressType() bool`

HasAddressType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


