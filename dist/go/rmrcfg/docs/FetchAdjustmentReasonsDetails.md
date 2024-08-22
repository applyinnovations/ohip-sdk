# FetchAdjustmentReasonsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentReasons** | Pointer to [**[]RoomRotationAdjustmentReasonType**](RoomRotationAdjustmentReasonType.md) | Room Rotation Adjustment Reason Enumeration element. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchAdjustmentReasonsDetails

`func NewFetchAdjustmentReasonsDetails() *FetchAdjustmentReasonsDetails`

NewFetchAdjustmentReasonsDetails instantiates a new FetchAdjustmentReasonsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchAdjustmentReasonsDetailsWithDefaults

`func NewFetchAdjustmentReasonsDetailsWithDefaults() *FetchAdjustmentReasonsDetails`

NewFetchAdjustmentReasonsDetailsWithDefaults instantiates a new FetchAdjustmentReasonsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentReasons

`func (o *FetchAdjustmentReasonsDetails) GetAdjustmentReasons() []RoomRotationAdjustmentReasonType`

GetAdjustmentReasons returns the AdjustmentReasons field if non-nil, zero value otherwise.

### GetAdjustmentReasonsOk

`func (o *FetchAdjustmentReasonsDetails) GetAdjustmentReasonsOk() (*[]RoomRotationAdjustmentReasonType, bool)`

GetAdjustmentReasonsOk returns a tuple with the AdjustmentReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentReasons

`func (o *FetchAdjustmentReasonsDetails) SetAdjustmentReasons(v []RoomRotationAdjustmentReasonType)`

SetAdjustmentReasons sets AdjustmentReasons field to given value.

### HasAdjustmentReasons

`func (o *FetchAdjustmentReasonsDetails) HasAdjustmentReasons() bool`

HasAdjustmentReasons returns a boolean if a field has been set.

### GetLinks

`func (o *FetchAdjustmentReasonsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchAdjustmentReasonsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchAdjustmentReasonsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchAdjustmentReasonsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchAdjustmentReasonsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchAdjustmentReasonsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchAdjustmentReasonsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchAdjustmentReasonsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


