# ApplicationUserType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Hotel** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**AppUser** | Pointer to **string** |  | [optional] 
**LDAPUser** | Pointer to **string** |  | [optional] 
**ActAs** | Pointer to **string** |  | [optional] 
**ActAt** | Pointer to **string** |  | [optional] 
**UserDefaultLanguage** | Pointer to **string** |  | [optional] 
**AppUserId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CashierId** | Pointer to **int32** |  | [optional] 
**CashierTitle** | Pointer to **string** | Cashier title. | [optional] 
**Department** | Pointer to **string** |  | [optional] 
**DepartmentLocation** | Pointer to **string** |  | [optional] 
**SalesRepCode** | Pointer to **string** |  | [optional] 
**ExpiryDate** | Pointer to **string** |  | [optional] 
**DisabledUntil** | Pointer to **string** |  | [optional] 
**PasswordChangeDate** | Pointer to **string** |  | [optional] 
**UserInfo** | Pointer to [**EmployeeInfoType**](EmployeeInfoType.md) |  | [optional] 
**UserSessionInfo** | Pointer to [**UserSessionInfoType**](UserSessionInfoType.md) |  | [optional] 
**AttendantInfo** | Pointer to [**AttendantType**](AttendantType.md) |  | [optional] 

## Methods

### NewApplicationUserType

`func NewApplicationUserType() *ApplicationUserType`

NewApplicationUserType instantiates a new ApplicationUserType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationUserTypeWithDefaults

`func NewApplicationUserTypeWithDefaults() *ApplicationUserType`

NewApplicationUserTypeWithDefaults instantiates a new ApplicationUserType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotel

`func (o *ApplicationUserType) GetHotel() CodeDescriptionType`

GetHotel returns the Hotel field if non-nil, zero value otherwise.

### GetHotelOk

`func (o *ApplicationUserType) GetHotelOk() (*CodeDescriptionType, bool)`

GetHotelOk returns a tuple with the Hotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotel

`func (o *ApplicationUserType) SetHotel(v CodeDescriptionType)`

SetHotel sets Hotel field to given value.

### HasHotel

`func (o *ApplicationUserType) HasHotel() bool`

HasHotel returns a boolean if a field has been set.

### GetAppUser

`func (o *ApplicationUserType) GetAppUser() string`

GetAppUser returns the AppUser field if non-nil, zero value otherwise.

### GetAppUserOk

`func (o *ApplicationUserType) GetAppUserOk() (*string, bool)`

GetAppUserOk returns a tuple with the AppUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppUser

`func (o *ApplicationUserType) SetAppUser(v string)`

SetAppUser sets AppUser field to given value.

### HasAppUser

`func (o *ApplicationUserType) HasAppUser() bool`

HasAppUser returns a boolean if a field has been set.

### GetLDAPUser

`func (o *ApplicationUserType) GetLDAPUser() string`

GetLDAPUser returns the LDAPUser field if non-nil, zero value otherwise.

### GetLDAPUserOk

`func (o *ApplicationUserType) GetLDAPUserOk() (*string, bool)`

GetLDAPUserOk returns a tuple with the LDAPUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLDAPUser

`func (o *ApplicationUserType) SetLDAPUser(v string)`

SetLDAPUser sets LDAPUser field to given value.

### HasLDAPUser

`func (o *ApplicationUserType) HasLDAPUser() bool`

HasLDAPUser returns a boolean if a field has been set.

### GetActAs

`func (o *ApplicationUserType) GetActAs() string`

GetActAs returns the ActAs field if non-nil, zero value otherwise.

### GetActAsOk

`func (o *ApplicationUserType) GetActAsOk() (*string, bool)`

GetActAsOk returns a tuple with the ActAs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActAs

`func (o *ApplicationUserType) SetActAs(v string)`

SetActAs sets ActAs field to given value.

### HasActAs

`func (o *ApplicationUserType) HasActAs() bool`

HasActAs returns a boolean if a field has been set.

### GetActAt

`func (o *ApplicationUserType) GetActAt() string`

GetActAt returns the ActAt field if non-nil, zero value otherwise.

### GetActAtOk

`func (o *ApplicationUserType) GetActAtOk() (*string, bool)`

GetActAtOk returns a tuple with the ActAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActAt

`func (o *ApplicationUserType) SetActAt(v string)`

SetActAt sets ActAt field to given value.

### HasActAt

`func (o *ApplicationUserType) HasActAt() bool`

HasActAt returns a boolean if a field has been set.

### GetUserDefaultLanguage

`func (o *ApplicationUserType) GetUserDefaultLanguage() string`

GetUserDefaultLanguage returns the UserDefaultLanguage field if non-nil, zero value otherwise.

### GetUserDefaultLanguageOk

`func (o *ApplicationUserType) GetUserDefaultLanguageOk() (*string, bool)`

GetUserDefaultLanguageOk returns a tuple with the UserDefaultLanguage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefaultLanguage

`func (o *ApplicationUserType) SetUserDefaultLanguage(v string)`

SetUserDefaultLanguage sets UserDefaultLanguage field to given value.

### HasUserDefaultLanguage

`func (o *ApplicationUserType) HasUserDefaultLanguage() bool`

HasUserDefaultLanguage returns a boolean if a field has been set.

### GetAppUserId

`func (o *ApplicationUserType) GetAppUserId() UniqueIDType`

GetAppUserId returns the AppUserId field if non-nil, zero value otherwise.

### GetAppUserIdOk

`func (o *ApplicationUserType) GetAppUserIdOk() (*UniqueIDType, bool)`

GetAppUserIdOk returns a tuple with the AppUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppUserId

`func (o *ApplicationUserType) SetAppUserId(v UniqueIDType)`

SetAppUserId sets AppUserId field to given value.

### HasAppUserId

`func (o *ApplicationUserType) HasAppUserId() bool`

HasAppUserId returns a boolean if a field has been set.

### GetCashierId

`func (o *ApplicationUserType) GetCashierId() int32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ApplicationUserType) GetCashierIdOk() (*int32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ApplicationUserType) SetCashierId(v int32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ApplicationUserType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCashierTitle

`func (o *ApplicationUserType) GetCashierTitle() string`

GetCashierTitle returns the CashierTitle field if non-nil, zero value otherwise.

### GetCashierTitleOk

`func (o *ApplicationUserType) GetCashierTitleOk() (*string, bool)`

GetCashierTitleOk returns a tuple with the CashierTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierTitle

`func (o *ApplicationUserType) SetCashierTitle(v string)`

SetCashierTitle sets CashierTitle field to given value.

### HasCashierTitle

`func (o *ApplicationUserType) HasCashierTitle() bool`

HasCashierTitle returns a boolean if a field has been set.

### GetDepartment

`func (o *ApplicationUserType) GetDepartment() string`

GetDepartment returns the Department field if non-nil, zero value otherwise.

### GetDepartmentOk

`func (o *ApplicationUserType) GetDepartmentOk() (*string, bool)`

GetDepartmentOk returns a tuple with the Department field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartment

`func (o *ApplicationUserType) SetDepartment(v string)`

SetDepartment sets Department field to given value.

### HasDepartment

`func (o *ApplicationUserType) HasDepartment() bool`

HasDepartment returns a boolean if a field has been set.

### GetDepartmentLocation

`func (o *ApplicationUserType) GetDepartmentLocation() string`

GetDepartmentLocation returns the DepartmentLocation field if non-nil, zero value otherwise.

### GetDepartmentLocationOk

`func (o *ApplicationUserType) GetDepartmentLocationOk() (*string, bool)`

GetDepartmentLocationOk returns a tuple with the DepartmentLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartmentLocation

`func (o *ApplicationUserType) SetDepartmentLocation(v string)`

SetDepartmentLocation sets DepartmentLocation field to given value.

### HasDepartmentLocation

`func (o *ApplicationUserType) HasDepartmentLocation() bool`

HasDepartmentLocation returns a boolean if a field has been set.

### GetSalesRepCode

`func (o *ApplicationUserType) GetSalesRepCode() string`

GetSalesRepCode returns the SalesRepCode field if non-nil, zero value otherwise.

### GetSalesRepCodeOk

`func (o *ApplicationUserType) GetSalesRepCodeOk() (*string, bool)`

GetSalesRepCodeOk returns a tuple with the SalesRepCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesRepCode

`func (o *ApplicationUserType) SetSalesRepCode(v string)`

SetSalesRepCode sets SalesRepCode field to given value.

### HasSalesRepCode

`func (o *ApplicationUserType) HasSalesRepCode() bool`

HasSalesRepCode returns a boolean if a field has been set.

### GetExpiryDate

`func (o *ApplicationUserType) GetExpiryDate() string`

GetExpiryDate returns the ExpiryDate field if non-nil, zero value otherwise.

### GetExpiryDateOk

`func (o *ApplicationUserType) GetExpiryDateOk() (*string, bool)`

GetExpiryDateOk returns a tuple with the ExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryDate

`func (o *ApplicationUserType) SetExpiryDate(v string)`

SetExpiryDate sets ExpiryDate field to given value.

### HasExpiryDate

`func (o *ApplicationUserType) HasExpiryDate() bool`

HasExpiryDate returns a boolean if a field has been set.

### GetDisabledUntil

`func (o *ApplicationUserType) GetDisabledUntil() string`

GetDisabledUntil returns the DisabledUntil field if non-nil, zero value otherwise.

### GetDisabledUntilOk

`func (o *ApplicationUserType) GetDisabledUntilOk() (*string, bool)`

GetDisabledUntilOk returns a tuple with the DisabledUntil field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabledUntil

`func (o *ApplicationUserType) SetDisabledUntil(v string)`

SetDisabledUntil sets DisabledUntil field to given value.

### HasDisabledUntil

`func (o *ApplicationUserType) HasDisabledUntil() bool`

HasDisabledUntil returns a boolean if a field has been set.

### GetPasswordChangeDate

`func (o *ApplicationUserType) GetPasswordChangeDate() string`

GetPasswordChangeDate returns the PasswordChangeDate field if non-nil, zero value otherwise.

### GetPasswordChangeDateOk

`func (o *ApplicationUserType) GetPasswordChangeDateOk() (*string, bool)`

GetPasswordChangeDateOk returns a tuple with the PasswordChangeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordChangeDate

`func (o *ApplicationUserType) SetPasswordChangeDate(v string)`

SetPasswordChangeDate sets PasswordChangeDate field to given value.

### HasPasswordChangeDate

`func (o *ApplicationUserType) HasPasswordChangeDate() bool`

HasPasswordChangeDate returns a boolean if a field has been set.

### GetUserInfo

`func (o *ApplicationUserType) GetUserInfo() EmployeeInfoType`

GetUserInfo returns the UserInfo field if non-nil, zero value otherwise.

### GetUserInfoOk

`func (o *ApplicationUserType) GetUserInfoOk() (*EmployeeInfoType, bool)`

GetUserInfoOk returns a tuple with the UserInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInfo

`func (o *ApplicationUserType) SetUserInfo(v EmployeeInfoType)`

SetUserInfo sets UserInfo field to given value.

### HasUserInfo

`func (o *ApplicationUserType) HasUserInfo() bool`

HasUserInfo returns a boolean if a field has been set.

### GetUserSessionInfo

`func (o *ApplicationUserType) GetUserSessionInfo() UserSessionInfoType`

GetUserSessionInfo returns the UserSessionInfo field if non-nil, zero value otherwise.

### GetUserSessionInfoOk

`func (o *ApplicationUserType) GetUserSessionInfoOk() (*UserSessionInfoType, bool)`

GetUserSessionInfoOk returns a tuple with the UserSessionInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserSessionInfo

`func (o *ApplicationUserType) SetUserSessionInfo(v UserSessionInfoType)`

SetUserSessionInfo sets UserSessionInfo field to given value.

### HasUserSessionInfo

`func (o *ApplicationUserType) HasUserSessionInfo() bool`

HasUserSessionInfo returns a boolean if a field has been set.

### GetAttendantInfo

`func (o *ApplicationUserType) GetAttendantInfo() AttendantType`

GetAttendantInfo returns the AttendantInfo field if non-nil, zero value otherwise.

### GetAttendantInfoOk

`func (o *ApplicationUserType) GetAttendantInfoOk() (*AttendantType, bool)`

GetAttendantInfoOk returns a tuple with the AttendantInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendantInfo

`func (o *ApplicationUserType) SetAttendantInfo(v AttendantType)`

SetAttendantInfo sets AttendantInfo field to given value.

### HasAttendantInfo

`func (o *ApplicationUserType) HasAttendantInfo() bool`

HasAttendantInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


