# AddressInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**AddressType**](AddressType.md) |  | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAddressInfoType

`func NewAddressInfoType() *AddressInfoType`

NewAddressInfoType instantiates a new AddressInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddressInfoTypeWithDefaults

`func NewAddressInfoTypeWithDefaults() *AddressInfoType`

NewAddressInfoTypeWithDefaults instantiates a new AddressInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *AddressInfoType) GetAddress() AddressType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *AddressInfoType) GetAddressOk() (*AddressType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *AddressInfoType) SetAddress(v AddressType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *AddressInfoType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetId

`func (o *AddressInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AddressInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AddressInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AddressInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *AddressInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AddressInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AddressInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AddressInfoType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetIdContext

`func (o *AddressInfoType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *AddressInfoType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *AddressInfoType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *AddressInfoType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetWarnings

`func (o *AddressInfoType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AddressInfoType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AddressInfoType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AddressInfoType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


