# GetRoomRotationPoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomRotationPointsInfoList** | Pointer to [**[]RoomRotationPointsInfoType**](RoomRotationPointsInfoType.md) | List of Room Rotation Points Information. | [optional] 
**OutOfOrderServiceActive** | Pointer to **bool** | Indicates whether Out of Order/ Out of Service Room Rotation Points is active | [optional] 
**StartRoomRotationPeriodDate** | Pointer to **string** | Start date of the Room Rotation Period | [optional] 
**EndRoomRotationPeriodDate** | Pointer to **string** | End date of the Room Rotation Period | [optional] 
**BalanceForwardActive** | Pointer to **bool** | Indicates whether the balance forward is active | [optional] 
**BalanceForwardEditable** | Pointer to **bool** | Indicates whether the user is allowed to edit balance forward points | [optional] 
**Offset** | Pointer to **int32** | Indicates the index of the next applicable set(page). | [optional] 
**Limit** | Pointer to **int32** | Indicates number of records the API can return as per the API request limit sent. | [optional] 
**Count** | Pointer to **int32** | Indicates number of records the API has returned actually as per the API request criteria. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether there are more records available to be returned as per the API request criteria or not. | [optional] 
**TotalResults** | Pointer to **int32** | Indicates total number of records available that can be returned as per the API request criteria. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGetRoomRotationPoints

`func NewGetRoomRotationPoints() *GetRoomRotationPoints`

NewGetRoomRotationPoints instantiates a new GetRoomRotationPoints object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetRoomRotationPointsWithDefaults

`func NewGetRoomRotationPointsWithDefaults() *GetRoomRotationPoints`

NewGetRoomRotationPointsWithDefaults instantiates a new GetRoomRotationPoints object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomRotationPointsInfoList

`func (o *GetRoomRotationPoints) GetRoomRotationPointsInfoList() []RoomRotationPointsInfoType`

GetRoomRotationPointsInfoList returns the RoomRotationPointsInfoList field if non-nil, zero value otherwise.

### GetRoomRotationPointsInfoListOk

`func (o *GetRoomRotationPoints) GetRoomRotationPointsInfoListOk() (*[]RoomRotationPointsInfoType, bool)`

GetRoomRotationPointsInfoListOk returns a tuple with the RoomRotationPointsInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRotationPointsInfoList

`func (o *GetRoomRotationPoints) SetRoomRotationPointsInfoList(v []RoomRotationPointsInfoType)`

SetRoomRotationPointsInfoList sets RoomRotationPointsInfoList field to given value.

### HasRoomRotationPointsInfoList

`func (o *GetRoomRotationPoints) HasRoomRotationPointsInfoList() bool`

HasRoomRotationPointsInfoList returns a boolean if a field has been set.

### GetOutOfOrderServiceActive

`func (o *GetRoomRotationPoints) GetOutOfOrderServiceActive() bool`

GetOutOfOrderServiceActive returns the OutOfOrderServiceActive field if non-nil, zero value otherwise.

### GetOutOfOrderServiceActiveOk

`func (o *GetRoomRotationPoints) GetOutOfOrderServiceActiveOk() (*bool, bool)`

GetOutOfOrderServiceActiveOk returns a tuple with the OutOfOrderServiceActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutOfOrderServiceActive

`func (o *GetRoomRotationPoints) SetOutOfOrderServiceActive(v bool)`

SetOutOfOrderServiceActive sets OutOfOrderServiceActive field to given value.

### HasOutOfOrderServiceActive

`func (o *GetRoomRotationPoints) HasOutOfOrderServiceActive() bool`

HasOutOfOrderServiceActive returns a boolean if a field has been set.

### GetStartRoomRotationPeriodDate

`func (o *GetRoomRotationPoints) GetStartRoomRotationPeriodDate() string`

GetStartRoomRotationPeriodDate returns the StartRoomRotationPeriodDate field if non-nil, zero value otherwise.

### GetStartRoomRotationPeriodDateOk

`func (o *GetRoomRotationPoints) GetStartRoomRotationPeriodDateOk() (*string, bool)`

GetStartRoomRotationPeriodDateOk returns a tuple with the StartRoomRotationPeriodDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartRoomRotationPeriodDate

`func (o *GetRoomRotationPoints) SetStartRoomRotationPeriodDate(v string)`

SetStartRoomRotationPeriodDate sets StartRoomRotationPeriodDate field to given value.

### HasStartRoomRotationPeriodDate

`func (o *GetRoomRotationPoints) HasStartRoomRotationPeriodDate() bool`

HasStartRoomRotationPeriodDate returns a boolean if a field has been set.

### GetEndRoomRotationPeriodDate

`func (o *GetRoomRotationPoints) GetEndRoomRotationPeriodDate() string`

GetEndRoomRotationPeriodDate returns the EndRoomRotationPeriodDate field if non-nil, zero value otherwise.

### GetEndRoomRotationPeriodDateOk

`func (o *GetRoomRotationPoints) GetEndRoomRotationPeriodDateOk() (*string, bool)`

GetEndRoomRotationPeriodDateOk returns a tuple with the EndRoomRotationPeriodDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndRoomRotationPeriodDate

`func (o *GetRoomRotationPoints) SetEndRoomRotationPeriodDate(v string)`

SetEndRoomRotationPeriodDate sets EndRoomRotationPeriodDate field to given value.

### HasEndRoomRotationPeriodDate

`func (o *GetRoomRotationPoints) HasEndRoomRotationPeriodDate() bool`

HasEndRoomRotationPeriodDate returns a boolean if a field has been set.

### GetBalanceForwardActive

`func (o *GetRoomRotationPoints) GetBalanceForwardActive() bool`

GetBalanceForwardActive returns the BalanceForwardActive field if non-nil, zero value otherwise.

### GetBalanceForwardActiveOk

`func (o *GetRoomRotationPoints) GetBalanceForwardActiveOk() (*bool, bool)`

GetBalanceForwardActiveOk returns a tuple with the BalanceForwardActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceForwardActive

`func (o *GetRoomRotationPoints) SetBalanceForwardActive(v bool)`

SetBalanceForwardActive sets BalanceForwardActive field to given value.

### HasBalanceForwardActive

`func (o *GetRoomRotationPoints) HasBalanceForwardActive() bool`

HasBalanceForwardActive returns a boolean if a field has been set.

### GetBalanceForwardEditable

`func (o *GetRoomRotationPoints) GetBalanceForwardEditable() bool`

GetBalanceForwardEditable returns the BalanceForwardEditable field if non-nil, zero value otherwise.

### GetBalanceForwardEditableOk

`func (o *GetRoomRotationPoints) GetBalanceForwardEditableOk() (*bool, bool)`

GetBalanceForwardEditableOk returns a tuple with the BalanceForwardEditable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceForwardEditable

`func (o *GetRoomRotationPoints) SetBalanceForwardEditable(v bool)`

SetBalanceForwardEditable sets BalanceForwardEditable field to given value.

### HasBalanceForwardEditable

`func (o *GetRoomRotationPoints) HasBalanceForwardEditable() bool`

HasBalanceForwardEditable returns a boolean if a field has been set.

### GetOffset

`func (o *GetRoomRotationPoints) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *GetRoomRotationPoints) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *GetRoomRotationPoints) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *GetRoomRotationPoints) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *GetRoomRotationPoints) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *GetRoomRotationPoints) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *GetRoomRotationPoints) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *GetRoomRotationPoints) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetCount

`func (o *GetRoomRotationPoints) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *GetRoomRotationPoints) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *GetRoomRotationPoints) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *GetRoomRotationPoints) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *GetRoomRotationPoints) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *GetRoomRotationPoints) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *GetRoomRotationPoints) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *GetRoomRotationPoints) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *GetRoomRotationPoints) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *GetRoomRotationPoints) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *GetRoomRotationPoints) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *GetRoomRotationPoints) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetLinks

`func (o *GetRoomRotationPoints) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GetRoomRotationPoints) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GetRoomRotationPoints) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GetRoomRotationPoints) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GetRoomRotationPoints) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GetRoomRotationPoints) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GetRoomRotationPoints) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GetRoomRotationPoints) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


