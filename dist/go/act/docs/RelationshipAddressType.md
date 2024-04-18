# RelationshipAddressType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressLine** | Pointer to **[]string** | When the address is unformatted (FormattedInd&#x3D;\&quot;false\&quot;) these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence. | [optional] 
**City** | Pointer to **string** | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). | [optional] 
**Country** | Pointer to **string** | Country name (e.g., Ireland). | [optional] 
**PostalCode** | Pointer to **string** | Post Office Code number. | [optional] 
**State** | Pointer to **string** | State or Province name (e.g., Texas). | [optional] 

## Methods

### NewRelationshipAddressType

`func NewRelationshipAddressType() *RelationshipAddressType`

NewRelationshipAddressType instantiates a new RelationshipAddressType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelationshipAddressTypeWithDefaults

`func NewRelationshipAddressTypeWithDefaults() *RelationshipAddressType`

NewRelationshipAddressTypeWithDefaults instantiates a new RelationshipAddressType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddressLine

`func (o *RelationshipAddressType) GetAddressLine() []string`

GetAddressLine returns the AddressLine field if non-nil, zero value otherwise.

### GetAddressLineOk

`func (o *RelationshipAddressType) GetAddressLineOk() (*[]string, bool)`

GetAddressLineOk returns a tuple with the AddressLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressLine

`func (o *RelationshipAddressType) SetAddressLine(v []string)`

SetAddressLine sets AddressLine field to given value.

### HasAddressLine

`func (o *RelationshipAddressType) HasAddressLine() bool`

HasAddressLine returns a boolean if a field has been set.

### GetCity

`func (o *RelationshipAddressType) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *RelationshipAddressType) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *RelationshipAddressType) SetCity(v string)`

SetCity sets City field to given value.

### HasCity

`func (o *RelationshipAddressType) HasCity() bool`

HasCity returns a boolean if a field has been set.

### GetCountry

`func (o *RelationshipAddressType) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *RelationshipAddressType) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *RelationshipAddressType) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *RelationshipAddressType) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetPostalCode

`func (o *RelationshipAddressType) GetPostalCode() string`

GetPostalCode returns the PostalCode field if non-nil, zero value otherwise.

### GetPostalCodeOk

`func (o *RelationshipAddressType) GetPostalCodeOk() (*string, bool)`

GetPostalCodeOk returns a tuple with the PostalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostalCode

`func (o *RelationshipAddressType) SetPostalCode(v string)`

SetPostalCode sets PostalCode field to given value.

### HasPostalCode

`func (o *RelationshipAddressType) HasPostalCode() bool`

HasPostalCode returns a boolean if a field has been set.

### GetState

`func (o *RelationshipAddressType) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *RelationshipAddressType) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *RelationshipAddressType) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *RelationshipAddressType) HasState() bool`

HasState returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


