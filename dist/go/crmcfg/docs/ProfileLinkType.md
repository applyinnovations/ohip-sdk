# ProfileLinkType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultProfileLink** | Pointer to **bool** | Relationship is default relationship or not | [optional] 
**FromCode** | Pointer to **string** | From code to process | [optional] 
**FromDescription** | Pointer to **string** | The description about from relation | [optional] 
**FromType** | Pointer to **string** | From type to process | [optional] 
**GlobalProfileLink** | Pointer to **bool** | Relationship is global relationship or not | [optional] 
**HasHierarchy** | Pointer to **bool** | Determines whether this relationship is hierarchichal or not. | [optional] 
**InheritRates** | Pointer to [**ProfileLinkInheritRates**](ProfileLinkInheritRates.md) |  | [optional] 
**Protected** | Pointer to **bool** | Determines whether this code is protected from deleting. This is a read-only element and is only populated during the fetch operation. | [optional] 
**ToCode** | Pointer to **string** | To code to process | [optional] 
**ToDescription** | Pointer to **string** | The description about to relation | [optional] 
**ToType** | Pointer to **string** | To type to process | [optional] 

## Methods

### NewProfileLinkType

`func NewProfileLinkType() *ProfileLinkType`

NewProfileLinkType instantiates a new ProfileLinkType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileLinkTypeWithDefaults

`func NewProfileLinkTypeWithDefaults() *ProfileLinkType`

NewProfileLinkTypeWithDefaults instantiates a new ProfileLinkType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultProfileLink

`func (o *ProfileLinkType) GetDefaultProfileLink() bool`

GetDefaultProfileLink returns the DefaultProfileLink field if non-nil, zero value otherwise.

### GetDefaultProfileLinkOk

`func (o *ProfileLinkType) GetDefaultProfileLinkOk() (*bool, bool)`

GetDefaultProfileLinkOk returns a tuple with the DefaultProfileLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultProfileLink

`func (o *ProfileLinkType) SetDefaultProfileLink(v bool)`

SetDefaultProfileLink sets DefaultProfileLink field to given value.

### HasDefaultProfileLink

`func (o *ProfileLinkType) HasDefaultProfileLink() bool`

HasDefaultProfileLink returns a boolean if a field has been set.

### GetFromCode

`func (o *ProfileLinkType) GetFromCode() string`

GetFromCode returns the FromCode field if non-nil, zero value otherwise.

### GetFromCodeOk

`func (o *ProfileLinkType) GetFromCodeOk() (*string, bool)`

GetFromCodeOk returns a tuple with the FromCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromCode

`func (o *ProfileLinkType) SetFromCode(v string)`

SetFromCode sets FromCode field to given value.

### HasFromCode

`func (o *ProfileLinkType) HasFromCode() bool`

HasFromCode returns a boolean if a field has been set.

### GetFromDescription

`func (o *ProfileLinkType) GetFromDescription() string`

GetFromDescription returns the FromDescription field if non-nil, zero value otherwise.

### GetFromDescriptionOk

`func (o *ProfileLinkType) GetFromDescriptionOk() (*string, bool)`

GetFromDescriptionOk returns a tuple with the FromDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromDescription

`func (o *ProfileLinkType) SetFromDescription(v string)`

SetFromDescription sets FromDescription field to given value.

### HasFromDescription

`func (o *ProfileLinkType) HasFromDescription() bool`

HasFromDescription returns a boolean if a field has been set.

### GetFromType

`func (o *ProfileLinkType) GetFromType() string`

GetFromType returns the FromType field if non-nil, zero value otherwise.

### GetFromTypeOk

`func (o *ProfileLinkType) GetFromTypeOk() (*string, bool)`

GetFromTypeOk returns a tuple with the FromType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromType

`func (o *ProfileLinkType) SetFromType(v string)`

SetFromType sets FromType field to given value.

### HasFromType

`func (o *ProfileLinkType) HasFromType() bool`

HasFromType returns a boolean if a field has been set.

### GetGlobalProfileLink

`func (o *ProfileLinkType) GetGlobalProfileLink() bool`

GetGlobalProfileLink returns the GlobalProfileLink field if non-nil, zero value otherwise.

### GetGlobalProfileLinkOk

`func (o *ProfileLinkType) GetGlobalProfileLinkOk() (*bool, bool)`

GetGlobalProfileLinkOk returns a tuple with the GlobalProfileLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobalProfileLink

`func (o *ProfileLinkType) SetGlobalProfileLink(v bool)`

SetGlobalProfileLink sets GlobalProfileLink field to given value.

### HasGlobalProfileLink

`func (o *ProfileLinkType) HasGlobalProfileLink() bool`

HasGlobalProfileLink returns a boolean if a field has been set.

### GetHasHierarchy

`func (o *ProfileLinkType) GetHasHierarchy() bool`

GetHasHierarchy returns the HasHierarchy field if non-nil, zero value otherwise.

### GetHasHierarchyOk

`func (o *ProfileLinkType) GetHasHierarchyOk() (*bool, bool)`

GetHasHierarchyOk returns a tuple with the HasHierarchy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasHierarchy

`func (o *ProfileLinkType) SetHasHierarchy(v bool)`

SetHasHierarchy sets HasHierarchy field to given value.

### HasHasHierarchy

`func (o *ProfileLinkType) HasHasHierarchy() bool`

HasHasHierarchy returns a boolean if a field has been set.

### GetInheritRates

`func (o *ProfileLinkType) GetInheritRates() ProfileLinkInheritRates`

GetInheritRates returns the InheritRates field if non-nil, zero value otherwise.

### GetInheritRatesOk

`func (o *ProfileLinkType) GetInheritRatesOk() (*ProfileLinkInheritRates, bool)`

GetInheritRatesOk returns a tuple with the InheritRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInheritRates

`func (o *ProfileLinkType) SetInheritRates(v ProfileLinkInheritRates)`

SetInheritRates sets InheritRates field to given value.

### HasInheritRates

`func (o *ProfileLinkType) HasInheritRates() bool`

HasInheritRates returns a boolean if a field has been set.

### GetProtected

`func (o *ProfileLinkType) GetProtected() bool`

GetProtected returns the Protected field if non-nil, zero value otherwise.

### GetProtectedOk

`func (o *ProfileLinkType) GetProtectedOk() (*bool, bool)`

GetProtectedOk returns a tuple with the Protected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtected

`func (o *ProfileLinkType) SetProtected(v bool)`

SetProtected sets Protected field to given value.

### HasProtected

`func (o *ProfileLinkType) HasProtected() bool`

HasProtected returns a boolean if a field has been set.

### GetToCode

`func (o *ProfileLinkType) GetToCode() string`

GetToCode returns the ToCode field if non-nil, zero value otherwise.

### GetToCodeOk

`func (o *ProfileLinkType) GetToCodeOk() (*string, bool)`

GetToCodeOk returns a tuple with the ToCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToCode

`func (o *ProfileLinkType) SetToCode(v string)`

SetToCode sets ToCode field to given value.

### HasToCode

`func (o *ProfileLinkType) HasToCode() bool`

HasToCode returns a boolean if a field has been set.

### GetToDescription

`func (o *ProfileLinkType) GetToDescription() string`

GetToDescription returns the ToDescription field if non-nil, zero value otherwise.

### GetToDescriptionOk

`func (o *ProfileLinkType) GetToDescriptionOk() (*string, bool)`

GetToDescriptionOk returns a tuple with the ToDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToDescription

`func (o *ProfileLinkType) SetToDescription(v string)`

SetToDescription sets ToDescription field to given value.

### HasToDescription

`func (o *ProfileLinkType) HasToDescription() bool`

HasToDescription returns a boolean if a field has been set.

### GetToType

`func (o *ProfileLinkType) GetToType() string`

GetToType returns the ToType field if non-nil, zero value otherwise.

### GetToTypeOk

`func (o *ProfileLinkType) GetToTypeOk() (*string, bool)`

GetToTypeOk returns a tuple with the ToType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToType

`func (o *ProfileLinkType) SetToType(v string)`

SetToType sets ToType field to given value.

### HasToType

`func (o *ProfileLinkType) HasToType() bool`

HasToType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


