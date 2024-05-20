# ReservationRotationPointsAdjustmentLogType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustedPointsTo** | Pointer to **float32** | The number of points for the specific calculation rule after the change of points. | [optional] 
**AdjustmentReason** | Pointer to [**ReservationRotationPointsAdjustmentReasonType**](ReservationRotationPointsAdjustmentReasonType.md) |  | [optional] 
**LogDate** | Pointer to **string** | The date and time that the adjustment was made to the rotation points for the room. | [optional] 
**OriginalPoints** | Pointer to **float32** | The points that were applicable for the specific calculation rule before the change of points. | [optional] 
**Type** | Pointer to [**RotationRuleCalculationRuleType**](RotationRuleCalculationRuleType.md) |  | [optional] 
**UserId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**UserName** | Pointer to **string** | Unique application login of the user who made the adjustment. | [optional] 

## Methods

### NewReservationRotationPointsAdjustmentLogType

`func NewReservationRotationPointsAdjustmentLogType() *ReservationRotationPointsAdjustmentLogType`

NewReservationRotationPointsAdjustmentLogType instantiates a new ReservationRotationPointsAdjustmentLogType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationRotationPointsAdjustmentLogTypeWithDefaults

`func NewReservationRotationPointsAdjustmentLogTypeWithDefaults() *ReservationRotationPointsAdjustmentLogType`

NewReservationRotationPointsAdjustmentLogTypeWithDefaults instantiates a new ReservationRotationPointsAdjustmentLogType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustedPointsTo

`func (o *ReservationRotationPointsAdjustmentLogType) GetAdjustedPointsTo() float32`

GetAdjustedPointsTo returns the AdjustedPointsTo field if non-nil, zero value otherwise.

### GetAdjustedPointsToOk

`func (o *ReservationRotationPointsAdjustmentLogType) GetAdjustedPointsToOk() (*float32, bool)`

GetAdjustedPointsToOk returns a tuple with the AdjustedPointsTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustedPointsTo

`func (o *ReservationRotationPointsAdjustmentLogType) SetAdjustedPointsTo(v float32)`

SetAdjustedPointsTo sets AdjustedPointsTo field to given value.

### HasAdjustedPointsTo

`func (o *ReservationRotationPointsAdjustmentLogType) HasAdjustedPointsTo() bool`

HasAdjustedPointsTo returns a boolean if a field has been set.

### GetAdjustmentReason

`func (o *ReservationRotationPointsAdjustmentLogType) GetAdjustmentReason() ReservationRotationPointsAdjustmentReasonType`

GetAdjustmentReason returns the AdjustmentReason field if non-nil, zero value otherwise.

### GetAdjustmentReasonOk

`func (o *ReservationRotationPointsAdjustmentLogType) GetAdjustmentReasonOk() (*ReservationRotationPointsAdjustmentReasonType, bool)`

GetAdjustmentReasonOk returns a tuple with the AdjustmentReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentReason

`func (o *ReservationRotationPointsAdjustmentLogType) SetAdjustmentReason(v ReservationRotationPointsAdjustmentReasonType)`

SetAdjustmentReason sets AdjustmentReason field to given value.

### HasAdjustmentReason

`func (o *ReservationRotationPointsAdjustmentLogType) HasAdjustmentReason() bool`

HasAdjustmentReason returns a boolean if a field has been set.

### GetLogDate

`func (o *ReservationRotationPointsAdjustmentLogType) GetLogDate() string`

GetLogDate returns the LogDate field if non-nil, zero value otherwise.

### GetLogDateOk

`func (o *ReservationRotationPointsAdjustmentLogType) GetLogDateOk() (*string, bool)`

GetLogDateOk returns a tuple with the LogDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogDate

`func (o *ReservationRotationPointsAdjustmentLogType) SetLogDate(v string)`

SetLogDate sets LogDate field to given value.

### HasLogDate

`func (o *ReservationRotationPointsAdjustmentLogType) HasLogDate() bool`

HasLogDate returns a boolean if a field has been set.

### GetOriginalPoints

`func (o *ReservationRotationPointsAdjustmentLogType) GetOriginalPoints() float32`

GetOriginalPoints returns the OriginalPoints field if non-nil, zero value otherwise.

### GetOriginalPointsOk

`func (o *ReservationRotationPointsAdjustmentLogType) GetOriginalPointsOk() (*float32, bool)`

GetOriginalPointsOk returns a tuple with the OriginalPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalPoints

`func (o *ReservationRotationPointsAdjustmentLogType) SetOriginalPoints(v float32)`

SetOriginalPoints sets OriginalPoints field to given value.

### HasOriginalPoints

`func (o *ReservationRotationPointsAdjustmentLogType) HasOriginalPoints() bool`

HasOriginalPoints returns a boolean if a field has been set.

### GetType

`func (o *ReservationRotationPointsAdjustmentLogType) GetType() RotationRuleCalculationRuleType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReservationRotationPointsAdjustmentLogType) GetTypeOk() (*RotationRuleCalculationRuleType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReservationRotationPointsAdjustmentLogType) SetType(v RotationRuleCalculationRuleType)`

SetType sets Type field to given value.

### HasType

`func (o *ReservationRotationPointsAdjustmentLogType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUserId

`func (o *ReservationRotationPointsAdjustmentLogType) GetUserId() UniqueIDType`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *ReservationRotationPointsAdjustmentLogType) GetUserIdOk() (*UniqueIDType, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *ReservationRotationPointsAdjustmentLogType) SetUserId(v UniqueIDType)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *ReservationRotationPointsAdjustmentLogType) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetUserName

`func (o *ReservationRotationPointsAdjustmentLogType) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *ReservationRotationPointsAdjustmentLogType) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *ReservationRotationPointsAdjustmentLogType) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *ReservationRotationPointsAdjustmentLogType) HasUserName() bool`

HasUserName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


