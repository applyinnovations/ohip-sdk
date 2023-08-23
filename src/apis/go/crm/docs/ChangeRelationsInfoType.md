# ChangeRelationsInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChangeProfileID** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Primary** | Pointer to **bool** | Indicates if this relationship is the primary relationship. | [optional] 
**SourceProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**SourceRelation** | Pointer to **string** | Indicates the type of to be changed relationship the current profile(Source Profile) has with the related profile(Target Profile). | [optional] 
**SourceRelationDescription** | Pointer to **string** | Displays the description of to be changed relationship the current profile(Source Profile) has with the related profile(Target Profile).This needs to be passed if the attribute primary is sent as true. | [optional] 
**TargetRelation** | Pointer to **string** | Indicates the type of to be changed relationship the Related profile(Target Profile) has with the current profile(Source Profile). | [optional] 
**TargetRelationDescription** | Pointer to **string** | Displays the description of to be changed relationship the related profile(Target Profile) has with the current profile(Source Profile). | [optional] 
**TargetProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 

## Methods

### NewChangeRelationsInfoType

`func NewChangeRelationsInfoType() *ChangeRelationsInfoType`

NewChangeRelationsInfoType instantiates a new ChangeRelationsInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeRelationsInfoTypeWithDefaults

`func NewChangeRelationsInfoTypeWithDefaults() *ChangeRelationsInfoType`

NewChangeRelationsInfoTypeWithDefaults instantiates a new ChangeRelationsInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChangeProfileID

`func (o *ChangeRelationsInfoType) GetChangeProfileID() UniqueIDType`

GetChangeProfileID returns the ChangeProfileID field if non-nil, zero value otherwise.

### GetChangeProfileIDOk

`func (o *ChangeRelationsInfoType) GetChangeProfileIDOk() (*UniqueIDType, bool)`

GetChangeProfileIDOk returns a tuple with the ChangeProfileID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeProfileID

`func (o *ChangeRelationsInfoType) SetChangeProfileID(v UniqueIDType)`

SetChangeProfileID sets ChangeProfileID field to given value.

### HasChangeProfileID

`func (o *ChangeRelationsInfoType) HasChangeProfileID() bool`

HasChangeProfileID returns a boolean if a field has been set.

### GetPrimary

`func (o *ChangeRelationsInfoType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *ChangeRelationsInfoType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *ChangeRelationsInfoType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *ChangeRelationsInfoType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetSourceProfileType

`func (o *ChangeRelationsInfoType) GetSourceProfileType() ProfileTypeType`

GetSourceProfileType returns the SourceProfileType field if non-nil, zero value otherwise.

### GetSourceProfileTypeOk

`func (o *ChangeRelationsInfoType) GetSourceProfileTypeOk() (*ProfileTypeType, bool)`

GetSourceProfileTypeOk returns a tuple with the SourceProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceProfileType

`func (o *ChangeRelationsInfoType) SetSourceProfileType(v ProfileTypeType)`

SetSourceProfileType sets SourceProfileType field to given value.

### HasSourceProfileType

`func (o *ChangeRelationsInfoType) HasSourceProfileType() bool`

HasSourceProfileType returns a boolean if a field has been set.

### GetSourceRelation

`func (o *ChangeRelationsInfoType) GetSourceRelation() string`

GetSourceRelation returns the SourceRelation field if non-nil, zero value otherwise.

### GetSourceRelationOk

`func (o *ChangeRelationsInfoType) GetSourceRelationOk() (*string, bool)`

GetSourceRelationOk returns a tuple with the SourceRelation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceRelation

`func (o *ChangeRelationsInfoType) SetSourceRelation(v string)`

SetSourceRelation sets SourceRelation field to given value.

### HasSourceRelation

`func (o *ChangeRelationsInfoType) HasSourceRelation() bool`

HasSourceRelation returns a boolean if a field has been set.

### GetSourceRelationDescription

`func (o *ChangeRelationsInfoType) GetSourceRelationDescription() string`

GetSourceRelationDescription returns the SourceRelationDescription field if non-nil, zero value otherwise.

### GetSourceRelationDescriptionOk

`func (o *ChangeRelationsInfoType) GetSourceRelationDescriptionOk() (*string, bool)`

GetSourceRelationDescriptionOk returns a tuple with the SourceRelationDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceRelationDescription

`func (o *ChangeRelationsInfoType) SetSourceRelationDescription(v string)`

SetSourceRelationDescription sets SourceRelationDescription field to given value.

### HasSourceRelationDescription

`func (o *ChangeRelationsInfoType) HasSourceRelationDescription() bool`

HasSourceRelationDescription returns a boolean if a field has been set.

### GetTargetRelation

`func (o *ChangeRelationsInfoType) GetTargetRelation() string`

GetTargetRelation returns the TargetRelation field if non-nil, zero value otherwise.

### GetTargetRelationOk

`func (o *ChangeRelationsInfoType) GetTargetRelationOk() (*string, bool)`

GetTargetRelationOk returns a tuple with the TargetRelation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRelation

`func (o *ChangeRelationsInfoType) SetTargetRelation(v string)`

SetTargetRelation sets TargetRelation field to given value.

### HasTargetRelation

`func (o *ChangeRelationsInfoType) HasTargetRelation() bool`

HasTargetRelation returns a boolean if a field has been set.

### GetTargetRelationDescription

`func (o *ChangeRelationsInfoType) GetTargetRelationDescription() string`

GetTargetRelationDescription returns the TargetRelationDescription field if non-nil, zero value otherwise.

### GetTargetRelationDescriptionOk

`func (o *ChangeRelationsInfoType) GetTargetRelationDescriptionOk() (*string, bool)`

GetTargetRelationDescriptionOk returns a tuple with the TargetRelationDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRelationDescription

`func (o *ChangeRelationsInfoType) SetTargetRelationDescription(v string)`

SetTargetRelationDescription sets TargetRelationDescription field to given value.

### HasTargetRelationDescription

`func (o *ChangeRelationsInfoType) HasTargetRelationDescription() bool`

HasTargetRelationDescription returns a boolean if a field has been set.

### GetTargetProfileType

`func (o *ChangeRelationsInfoType) GetTargetProfileType() ProfileTypeType`

GetTargetProfileType returns the TargetProfileType field if non-nil, zero value otherwise.

### GetTargetProfileTypeOk

`func (o *ChangeRelationsInfoType) GetTargetProfileTypeOk() (*ProfileTypeType, bool)`

GetTargetProfileTypeOk returns a tuple with the TargetProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetProfileType

`func (o *ChangeRelationsInfoType) SetTargetProfileType(v ProfileTypeType)`

SetTargetProfileType sets TargetProfileType field to given value.

### HasTargetProfileType

`func (o *ChangeRelationsInfoType) HasTargetProfileType() bool`

HasTargetProfileType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


