# ProfileRestrictionReasonsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileRestrictionReasons** | Pointer to [**[]ProfileRestrictionReasonType**](ProfileRestrictionReasonType.md) | List of Profile Restriction Reasons. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileRestrictionReasonsCriteria

`func NewProfileRestrictionReasonsCriteria() *ProfileRestrictionReasonsCriteria`

NewProfileRestrictionReasonsCriteria instantiates a new ProfileRestrictionReasonsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileRestrictionReasonsCriteriaWithDefaults

`func NewProfileRestrictionReasonsCriteriaWithDefaults() *ProfileRestrictionReasonsCriteria`

NewProfileRestrictionReasonsCriteriaWithDefaults instantiates a new ProfileRestrictionReasonsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileRestrictionReasons

`func (o *ProfileRestrictionReasonsCriteria) GetProfileRestrictionReasons() []ProfileRestrictionReasonType`

GetProfileRestrictionReasons returns the ProfileRestrictionReasons field if non-nil, zero value otherwise.

### GetProfileRestrictionReasonsOk

`func (o *ProfileRestrictionReasonsCriteria) GetProfileRestrictionReasonsOk() (*[]ProfileRestrictionReasonType, bool)`

GetProfileRestrictionReasonsOk returns a tuple with the ProfileRestrictionReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileRestrictionReasons

`func (o *ProfileRestrictionReasonsCriteria) SetProfileRestrictionReasons(v []ProfileRestrictionReasonType)`

SetProfileRestrictionReasons sets ProfileRestrictionReasons field to given value.

### HasProfileRestrictionReasons

`func (o *ProfileRestrictionReasonsCriteria) HasProfileRestrictionReasons() bool`

HasProfileRestrictionReasons returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileRestrictionReasonsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileRestrictionReasonsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileRestrictionReasonsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileRestrictionReasonsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileRestrictionReasonsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileRestrictionReasonsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileRestrictionReasonsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileRestrictionReasonsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


