# PutAdjustmentReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentReasons** | Pointer to [**[]RoomRotationAdjustmentReasonType**](RoomRotationAdjustmentReasonType.md) | Room Rotation Adjustment Reason Enumeration element. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutAdjustmentReasonsRequest

`func NewPutAdjustmentReasonsRequest() *PutAdjustmentReasonsRequest`

NewPutAdjustmentReasonsRequest instantiates a new PutAdjustmentReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutAdjustmentReasonsRequestWithDefaults

`func NewPutAdjustmentReasonsRequestWithDefaults() *PutAdjustmentReasonsRequest`

NewPutAdjustmentReasonsRequestWithDefaults instantiates a new PutAdjustmentReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentReasons

`func (o *PutAdjustmentReasonsRequest) GetAdjustmentReasons() []RoomRotationAdjustmentReasonType`

GetAdjustmentReasons returns the AdjustmentReasons field if non-nil, zero value otherwise.

### GetAdjustmentReasonsOk

`func (o *PutAdjustmentReasonsRequest) GetAdjustmentReasonsOk() (*[]RoomRotationAdjustmentReasonType, bool)`

GetAdjustmentReasonsOk returns a tuple with the AdjustmentReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentReasons

`func (o *PutAdjustmentReasonsRequest) SetAdjustmentReasons(v []RoomRotationAdjustmentReasonType)`

SetAdjustmentReasons sets AdjustmentReasons field to given value.

### HasAdjustmentReasons

`func (o *PutAdjustmentReasonsRequest) HasAdjustmentReasons() bool`

HasAdjustmentReasons returns a boolean if a field has been set.

### GetLinks

`func (o *PutAdjustmentReasonsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutAdjustmentReasonsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutAdjustmentReasonsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutAdjustmentReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutAdjustmentReasonsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutAdjustmentReasonsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutAdjustmentReasonsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutAdjustmentReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


