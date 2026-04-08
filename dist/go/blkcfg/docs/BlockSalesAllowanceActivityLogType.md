# BlockSalesAllowanceActivityLogType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** |  | [optional] 
**LogDate** | Pointer to **string** | Date on which change happened. | [optional] 
**SalesAllowanceDate** | Pointer to **string** | sales Allowance Date | [optional] 
**OldQuantity** | Pointer to **float32** | Value of sales allowance before the change. | [optional] 
**NewQuantity** | Pointer to **float32** | Value of sales allowance after the change. | [optional] 
**RefActionId** | Pointer to **float32** |  | [optional] 
**LogUserId** | Pointer to **float32** | ID of user who made the change. | [optional] 
**LogUserName** | Pointer to **string** | Name of user who made the change. | [optional] 
**ActionType** | Pointer to **string** | Action type. | [optional] 
**IpAddress** | Pointer to **string** | The IP Address of the machine that performed the activity | [optional] 

## Methods

### NewBlockSalesAllowanceActivityLogType

`func NewBlockSalesAllowanceActivityLogType() *BlockSalesAllowanceActivityLogType`

NewBlockSalesAllowanceActivityLogType instantiates a new BlockSalesAllowanceActivityLogType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockSalesAllowanceActivityLogTypeWithDefaults

`func NewBlockSalesAllowanceActivityLogTypeWithDefaults() *BlockSalesAllowanceActivityLogType`

NewBlockSalesAllowanceActivityLogTypeWithDefaults instantiates a new BlockSalesAllowanceActivityLogType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BlockSalesAllowanceActivityLogType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockSalesAllowanceActivityLogType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockSalesAllowanceActivityLogType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockSalesAllowanceActivityLogType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLogDate

`func (o *BlockSalesAllowanceActivityLogType) GetLogDate() string`

GetLogDate returns the LogDate field if non-nil, zero value otherwise.

### GetLogDateOk

`func (o *BlockSalesAllowanceActivityLogType) GetLogDateOk() (*string, bool)`

GetLogDateOk returns a tuple with the LogDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogDate

`func (o *BlockSalesAllowanceActivityLogType) SetLogDate(v string)`

SetLogDate sets LogDate field to given value.

### HasLogDate

`func (o *BlockSalesAllowanceActivityLogType) HasLogDate() bool`

HasLogDate returns a boolean if a field has been set.

### GetSalesAllowanceDate

`func (o *BlockSalesAllowanceActivityLogType) GetSalesAllowanceDate() string`

GetSalesAllowanceDate returns the SalesAllowanceDate field if non-nil, zero value otherwise.

### GetSalesAllowanceDateOk

`func (o *BlockSalesAllowanceActivityLogType) GetSalesAllowanceDateOk() (*string, bool)`

GetSalesAllowanceDateOk returns a tuple with the SalesAllowanceDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesAllowanceDate

`func (o *BlockSalesAllowanceActivityLogType) SetSalesAllowanceDate(v string)`

SetSalesAllowanceDate sets SalesAllowanceDate field to given value.

### HasSalesAllowanceDate

`func (o *BlockSalesAllowanceActivityLogType) HasSalesAllowanceDate() bool`

HasSalesAllowanceDate returns a boolean if a field has been set.

### GetOldQuantity

`func (o *BlockSalesAllowanceActivityLogType) GetOldQuantity() float32`

GetOldQuantity returns the OldQuantity field if non-nil, zero value otherwise.

### GetOldQuantityOk

`func (o *BlockSalesAllowanceActivityLogType) GetOldQuantityOk() (*float32, bool)`

GetOldQuantityOk returns a tuple with the OldQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldQuantity

`func (o *BlockSalesAllowanceActivityLogType) SetOldQuantity(v float32)`

SetOldQuantity sets OldQuantity field to given value.

### HasOldQuantity

`func (o *BlockSalesAllowanceActivityLogType) HasOldQuantity() bool`

HasOldQuantity returns a boolean if a field has been set.

### GetNewQuantity

`func (o *BlockSalesAllowanceActivityLogType) GetNewQuantity() float32`

GetNewQuantity returns the NewQuantity field if non-nil, zero value otherwise.

### GetNewQuantityOk

`func (o *BlockSalesAllowanceActivityLogType) GetNewQuantityOk() (*float32, bool)`

GetNewQuantityOk returns a tuple with the NewQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewQuantity

`func (o *BlockSalesAllowanceActivityLogType) SetNewQuantity(v float32)`

SetNewQuantity sets NewQuantity field to given value.

### HasNewQuantity

`func (o *BlockSalesAllowanceActivityLogType) HasNewQuantity() bool`

HasNewQuantity returns a boolean if a field has been set.

### GetRefActionId

`func (o *BlockSalesAllowanceActivityLogType) GetRefActionId() float32`

GetRefActionId returns the RefActionId field if non-nil, zero value otherwise.

### GetRefActionIdOk

`func (o *BlockSalesAllowanceActivityLogType) GetRefActionIdOk() (*float32, bool)`

GetRefActionIdOk returns a tuple with the RefActionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefActionId

`func (o *BlockSalesAllowanceActivityLogType) SetRefActionId(v float32)`

SetRefActionId sets RefActionId field to given value.

### HasRefActionId

`func (o *BlockSalesAllowanceActivityLogType) HasRefActionId() bool`

HasRefActionId returns a boolean if a field has been set.

### GetLogUserId

`func (o *BlockSalesAllowanceActivityLogType) GetLogUserId() float32`

GetLogUserId returns the LogUserId field if non-nil, zero value otherwise.

### GetLogUserIdOk

`func (o *BlockSalesAllowanceActivityLogType) GetLogUserIdOk() (*float32, bool)`

GetLogUserIdOk returns a tuple with the LogUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogUserId

`func (o *BlockSalesAllowanceActivityLogType) SetLogUserId(v float32)`

SetLogUserId sets LogUserId field to given value.

### HasLogUserId

`func (o *BlockSalesAllowanceActivityLogType) HasLogUserId() bool`

HasLogUserId returns a boolean if a field has been set.

### GetLogUserName

`func (o *BlockSalesAllowanceActivityLogType) GetLogUserName() string`

GetLogUserName returns the LogUserName field if non-nil, zero value otherwise.

### GetLogUserNameOk

`func (o *BlockSalesAllowanceActivityLogType) GetLogUserNameOk() (*string, bool)`

GetLogUserNameOk returns a tuple with the LogUserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogUserName

`func (o *BlockSalesAllowanceActivityLogType) SetLogUserName(v string)`

SetLogUserName sets LogUserName field to given value.

### HasLogUserName

`func (o *BlockSalesAllowanceActivityLogType) HasLogUserName() bool`

HasLogUserName returns a boolean if a field has been set.

### GetActionType

`func (o *BlockSalesAllowanceActivityLogType) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *BlockSalesAllowanceActivityLogType) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *BlockSalesAllowanceActivityLogType) SetActionType(v string)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *BlockSalesAllowanceActivityLogType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetIpAddress

`func (o *BlockSalesAllowanceActivityLogType) GetIpAddress() string`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *BlockSalesAllowanceActivityLogType) GetIpAddressOk() (*string, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *BlockSalesAllowanceActivityLogType) SetIpAddress(v string)`

SetIpAddress sets IpAddress field to given value.

### HasIpAddress

`func (o *BlockSalesAllowanceActivityLogType) HasIpAddress() bool`

HasIpAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


