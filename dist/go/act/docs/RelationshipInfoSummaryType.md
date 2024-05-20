# RelationshipInfoSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MasterAccountDetails** | Pointer to [**MasterAccountInfoType**](MasterAccountInfoType.md) |  | [optional] 
**RelationshipID** | Pointer to **string** | Relationship identifier. | [optional] 
**RelationshipProfile** | Pointer to [**RelationshipProfileSummaryType**](RelationshipProfileSummaryType.md) |  | [optional] 
**SourceRelation** | Pointer to **string** | Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile). | [optional] 
**SourceRelationDescription** | Pointer to **string** | Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile). | [optional] 
**TargetRelation** | Pointer to **string** | Displays the type of relationship the Related profile(Target Profile) has with the current profile(Source Profile). | [optional] 
**TargetRelationDescription** | Pointer to **string** | Displays the description of the target relation(Target Profile). | [optional] 

## Methods

### NewRelationshipInfoSummaryType

`func NewRelationshipInfoSummaryType() *RelationshipInfoSummaryType`

NewRelationshipInfoSummaryType instantiates a new RelationshipInfoSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelationshipInfoSummaryTypeWithDefaults

`func NewRelationshipInfoSummaryTypeWithDefaults() *RelationshipInfoSummaryType`

NewRelationshipInfoSummaryTypeWithDefaults instantiates a new RelationshipInfoSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMasterAccountDetails

`func (o *RelationshipInfoSummaryType) GetMasterAccountDetails() MasterAccountInfoType`

GetMasterAccountDetails returns the MasterAccountDetails field if non-nil, zero value otherwise.

### GetMasterAccountDetailsOk

`func (o *RelationshipInfoSummaryType) GetMasterAccountDetailsOk() (*MasterAccountInfoType, bool)`

GetMasterAccountDetailsOk returns a tuple with the MasterAccountDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterAccountDetails

`func (o *RelationshipInfoSummaryType) SetMasterAccountDetails(v MasterAccountInfoType)`

SetMasterAccountDetails sets MasterAccountDetails field to given value.

### HasMasterAccountDetails

`func (o *RelationshipInfoSummaryType) HasMasterAccountDetails() bool`

HasMasterAccountDetails returns a boolean if a field has been set.

### GetRelationshipID

`func (o *RelationshipInfoSummaryType) GetRelationshipID() string`

GetRelationshipID returns the RelationshipID field if non-nil, zero value otherwise.

### GetRelationshipIDOk

`func (o *RelationshipInfoSummaryType) GetRelationshipIDOk() (*string, bool)`

GetRelationshipIDOk returns a tuple with the RelationshipID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationshipID

`func (o *RelationshipInfoSummaryType) SetRelationshipID(v string)`

SetRelationshipID sets RelationshipID field to given value.

### HasRelationshipID

`func (o *RelationshipInfoSummaryType) HasRelationshipID() bool`

HasRelationshipID returns a boolean if a field has been set.

### GetRelationshipProfile

`func (o *RelationshipInfoSummaryType) GetRelationshipProfile() RelationshipProfileSummaryType`

GetRelationshipProfile returns the RelationshipProfile field if non-nil, zero value otherwise.

### GetRelationshipProfileOk

`func (o *RelationshipInfoSummaryType) GetRelationshipProfileOk() (*RelationshipProfileSummaryType, bool)`

GetRelationshipProfileOk returns a tuple with the RelationshipProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationshipProfile

`func (o *RelationshipInfoSummaryType) SetRelationshipProfile(v RelationshipProfileSummaryType)`

SetRelationshipProfile sets RelationshipProfile field to given value.

### HasRelationshipProfile

`func (o *RelationshipInfoSummaryType) HasRelationshipProfile() bool`

HasRelationshipProfile returns a boolean if a field has been set.

### GetSourceRelation

`func (o *RelationshipInfoSummaryType) GetSourceRelation() string`

GetSourceRelation returns the SourceRelation field if non-nil, zero value otherwise.

### GetSourceRelationOk

`func (o *RelationshipInfoSummaryType) GetSourceRelationOk() (*string, bool)`

GetSourceRelationOk returns a tuple with the SourceRelation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceRelation

`func (o *RelationshipInfoSummaryType) SetSourceRelation(v string)`

SetSourceRelation sets SourceRelation field to given value.

### HasSourceRelation

`func (o *RelationshipInfoSummaryType) HasSourceRelation() bool`

HasSourceRelation returns a boolean if a field has been set.

### GetSourceRelationDescription

`func (o *RelationshipInfoSummaryType) GetSourceRelationDescription() string`

GetSourceRelationDescription returns the SourceRelationDescription field if non-nil, zero value otherwise.

### GetSourceRelationDescriptionOk

`func (o *RelationshipInfoSummaryType) GetSourceRelationDescriptionOk() (*string, bool)`

GetSourceRelationDescriptionOk returns a tuple with the SourceRelationDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceRelationDescription

`func (o *RelationshipInfoSummaryType) SetSourceRelationDescription(v string)`

SetSourceRelationDescription sets SourceRelationDescription field to given value.

### HasSourceRelationDescription

`func (o *RelationshipInfoSummaryType) HasSourceRelationDescription() bool`

HasSourceRelationDescription returns a boolean if a field has been set.

### GetTargetRelation

`func (o *RelationshipInfoSummaryType) GetTargetRelation() string`

GetTargetRelation returns the TargetRelation field if non-nil, zero value otherwise.

### GetTargetRelationOk

`func (o *RelationshipInfoSummaryType) GetTargetRelationOk() (*string, bool)`

GetTargetRelationOk returns a tuple with the TargetRelation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRelation

`func (o *RelationshipInfoSummaryType) SetTargetRelation(v string)`

SetTargetRelation sets TargetRelation field to given value.

### HasTargetRelation

`func (o *RelationshipInfoSummaryType) HasTargetRelation() bool`

HasTargetRelation returns a boolean if a field has been set.

### GetTargetRelationDescription

`func (o *RelationshipInfoSummaryType) GetTargetRelationDescription() string`

GetTargetRelationDescription returns the TargetRelationDescription field if non-nil, zero value otherwise.

### GetTargetRelationDescriptionOk

`func (o *RelationshipInfoSummaryType) GetTargetRelationDescriptionOk() (*string, bool)`

GetTargetRelationDescriptionOk returns a tuple with the TargetRelationDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRelationDescription

`func (o *RelationshipInfoSummaryType) SetTargetRelationDescription(v string)`

SetTargetRelationDescription sets TargetRelationDescription field to given value.

### HasTargetRelationDescription

`func (o *RelationshipInfoSummaryType) HasTargetRelationDescription() bool`

HasTargetRelationDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


