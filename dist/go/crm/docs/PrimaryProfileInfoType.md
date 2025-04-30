# PrimaryProfileInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**ProfileName** | Pointer to **string** | Name of the account. | [optional] 

## Methods

### NewPrimaryProfileInfoType

`func NewPrimaryProfileInfoType() *PrimaryProfileInfoType`

NewPrimaryProfileInfoType instantiates a new PrimaryProfileInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrimaryProfileInfoTypeWithDefaults

`func NewPrimaryProfileInfoTypeWithDefaults() *PrimaryProfileInfoType`

NewPrimaryProfileInfoTypeWithDefaults instantiates a new PrimaryProfileInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileId

`func (o *PrimaryProfileInfoType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *PrimaryProfileInfoType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *PrimaryProfileInfoType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *PrimaryProfileInfoType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetProfileType

`func (o *PrimaryProfileInfoType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *PrimaryProfileInfoType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *PrimaryProfileInfoType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *PrimaryProfileInfoType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetProfileName

`func (o *PrimaryProfileInfoType) GetProfileName() string`

GetProfileName returns the ProfileName field if non-nil, zero value otherwise.

### GetProfileNameOk

`func (o *PrimaryProfileInfoType) GetProfileNameOk() (*string, bool)`

GetProfileNameOk returns a tuple with the ProfileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileName

`func (o *PrimaryProfileInfoType) SetProfileName(v string)`

SetProfileName sets ProfileName field to given value.

### HasProfileName

`func (o *PrimaryProfileInfoType) HasProfileName() bool`

HasProfileName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


