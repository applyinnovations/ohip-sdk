# PutProfileInactiveReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ProfileInactiveReasons** | Pointer to [**[]ProfileInactiveReasonType**](ProfileInactiveReasonType.md) | List of Profile Inactive Reasons. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutProfileInactiveReasonsRequest

`func NewPutProfileInactiveReasonsRequest() *PutProfileInactiveReasonsRequest`

NewPutProfileInactiveReasonsRequest instantiates a new PutProfileInactiveReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutProfileInactiveReasonsRequestWithDefaults

`func NewPutProfileInactiveReasonsRequestWithDefaults() *PutProfileInactiveReasonsRequest`

NewPutProfileInactiveReasonsRequestWithDefaults instantiates a new PutProfileInactiveReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutProfileInactiveReasonsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutProfileInactiveReasonsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutProfileInactiveReasonsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutProfileInactiveReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProfileInactiveReasons

`func (o *PutProfileInactiveReasonsRequest) GetProfileInactiveReasons() []ProfileInactiveReasonType`

GetProfileInactiveReasons returns the ProfileInactiveReasons field if non-nil, zero value otherwise.

### GetProfileInactiveReasonsOk

`func (o *PutProfileInactiveReasonsRequest) GetProfileInactiveReasonsOk() (*[]ProfileInactiveReasonType, bool)`

GetProfileInactiveReasonsOk returns a tuple with the ProfileInactiveReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileInactiveReasons

`func (o *PutProfileInactiveReasonsRequest) SetProfileInactiveReasons(v []ProfileInactiveReasonType)`

SetProfileInactiveReasons sets ProfileInactiveReasons field to given value.

### HasProfileInactiveReasons

`func (o *PutProfileInactiveReasonsRequest) HasProfileInactiveReasons() bool`

HasProfileInactiveReasons returns a boolean if a field has been set.

### GetWarnings

`func (o *PutProfileInactiveReasonsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutProfileInactiveReasonsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutProfileInactiveReasonsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutProfileInactiveReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


