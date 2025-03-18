# ArFlaggedReasons

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ARFlaggedReasons** | Pointer to [**[]ARFlaggedReasonType**](ARFlaggedReasonType.md) | List of the Flagged Reason to be configured or fetched | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewArFlaggedReasons

`func NewArFlaggedReasons() *ArFlaggedReasons`

NewArFlaggedReasons instantiates a new ArFlaggedReasons object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArFlaggedReasonsWithDefaults

`func NewArFlaggedReasonsWithDefaults() *ArFlaggedReasons`

NewArFlaggedReasonsWithDefaults instantiates a new ArFlaggedReasons object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetARFlaggedReasons

`func (o *ArFlaggedReasons) GetARFlaggedReasons() []ARFlaggedReasonType`

GetARFlaggedReasons returns the ARFlaggedReasons field if non-nil, zero value otherwise.

### GetARFlaggedReasonsOk

`func (o *ArFlaggedReasons) GetARFlaggedReasonsOk() (*[]ARFlaggedReasonType, bool)`

GetARFlaggedReasonsOk returns a tuple with the ARFlaggedReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARFlaggedReasons

`func (o *ArFlaggedReasons) SetARFlaggedReasons(v []ARFlaggedReasonType)`

SetARFlaggedReasons sets ARFlaggedReasons field to given value.

### HasARFlaggedReasons

`func (o *ArFlaggedReasons) HasARFlaggedReasons() bool`

HasARFlaggedReasons returns a boolean if a field has been set.

### GetLinks

`func (o *ArFlaggedReasons) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ArFlaggedReasons) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ArFlaggedReasons) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ArFlaggedReasons) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ArFlaggedReasons) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ArFlaggedReasons) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ArFlaggedReasons) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ArFlaggedReasons) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


