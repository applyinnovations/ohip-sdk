# PostProfileRestrictionReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ProfileRestrictionReasons** | Pointer to [**[]ProfileRestrictionReasonType**](ProfileRestrictionReasonType.md) | List of Profile Restriction Reasons. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostProfileRestrictionReasonsRequest

`func NewPostProfileRestrictionReasonsRequest() *PostProfileRestrictionReasonsRequest`

NewPostProfileRestrictionReasonsRequest instantiates a new PostProfileRestrictionReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostProfileRestrictionReasonsRequestWithDefaults

`func NewPostProfileRestrictionReasonsRequestWithDefaults() *PostProfileRestrictionReasonsRequest`

NewPostProfileRestrictionReasonsRequestWithDefaults instantiates a new PostProfileRestrictionReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostProfileRestrictionReasonsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostProfileRestrictionReasonsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostProfileRestrictionReasonsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostProfileRestrictionReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProfileRestrictionReasons

`func (o *PostProfileRestrictionReasonsRequest) GetProfileRestrictionReasons() []ProfileRestrictionReasonType`

GetProfileRestrictionReasons returns the ProfileRestrictionReasons field if non-nil, zero value otherwise.

### GetProfileRestrictionReasonsOk

`func (o *PostProfileRestrictionReasonsRequest) GetProfileRestrictionReasonsOk() (*[]ProfileRestrictionReasonType, bool)`

GetProfileRestrictionReasonsOk returns a tuple with the ProfileRestrictionReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileRestrictionReasons

`func (o *PostProfileRestrictionReasonsRequest) SetProfileRestrictionReasons(v []ProfileRestrictionReasonType)`

SetProfileRestrictionReasons sets ProfileRestrictionReasons field to given value.

### HasProfileRestrictionReasons

`func (o *PostProfileRestrictionReasonsRequest) HasProfileRestrictionReasons() bool`

HasProfileRestrictionReasons returns a boolean if a field has been set.

### GetWarnings

`func (o *PostProfileRestrictionReasonsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostProfileRestrictionReasonsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostProfileRestrictionReasonsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostProfileRestrictionReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


